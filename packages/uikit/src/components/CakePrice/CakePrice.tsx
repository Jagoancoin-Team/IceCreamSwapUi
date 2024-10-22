import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import LogoRound from "../Svg/Icons/LogoRound";
import Text from "../Text/Text";
import Skeleton from "../Skeleton/Skeleton";
import { Colors } from "../../theme";
import { ChainId } from "@pancakeswap/sdk";
import { ICE } from "@pancakeswap/tokens";
import axios from "axios";

export interface Props {
  color?: keyof Colors;
  showSkeleton?: boolean;
  chainId?: ChainId;
}

const PriceLink = styled.a`
  display: flex;
  align-items: center;
  svg {
    transition: transform 0.3s;
  }
  &:hover {
    svg {
      transform: scale(1.2);
    }
  }
`;

const CakePrice: React.FC<React.PropsWithChildren<Props>> = ({
  color = "textSubtle",
  showSkeleton = true,
  chainId = ChainId.CORE,
}) => {
  const [cakePriceUsd, setCakePriceUsd] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [fetchError, setFetchError] = useState<string | null>(null); // Renamed to avoid conflict

  useEffect(() => {
    const fetchCakePrice = async () => {
      try {
        const response = await axios.get('https://api.coingecko.com/api/v3/simple/price?ids=dynasty-coin&vs_currencies=usd');
        setCakePriceUsd(response.data['dynasty-coin'].usd);
      } catch (error) {
        console.error('Error fetching cake price:', error);
        setFetchError('Failed to load price'); // Updated variable name
      } finally {
        setLoading(false);
      }
    };

    fetchCakePrice();
  }, []);

  if (loading) {
    return showSkeleton ? <Skeleton width={80} height={24} /> : null;
  }

  if (fetchError) {
    return <Text color="textError">{fetchError}</Text>; // Updated variable name
  }

  return cakePriceUsd !== null ? (
    <PriceLink
      href={`/swap?outputCurrency=${ICE[chainId]?.address}&chainId=${chainId}`}
      target="_blank"
      aria-label={`View cake price of $${cakePriceUsd.toFixed(3)}`}
    >
      <LogoRound width="24px" mr="8px" />
      <Text color={color} bold>{`$${cakePriceUsd.toFixed(3)}`}</Text>
    </PriceLink>
  ) : null;
};

export default React.memo(CakePrice);
