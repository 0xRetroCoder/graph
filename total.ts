import type { Address } from "viem";

type RewardTokenInfo = {
  addressToken: string;
  rewardAmount: bigint;
};

interface TotalCurrentVotingRound {
  totalWeight: bigint; //voterContract totalWeight
  totalFees: RewardTokenInfo[];
  totalIncentives: RewardTokenInfo[];
  totalEmissions: bigint;
  votingPools: VotingPoolList[];
}

// array of pools that are voting
interface VotingPoolList {
  poolContractAddress: Address;
  gaugeContractAddress: Address; //voterContract gauges
  bribeContractAddress: Address; //voterContract gaugeToBribe
  feeContractAddress: Address; //voterContract gaugeToFees
  isAlive: boolean; //voterContract isAlive
  weights: bigint; //voterContract weights
  totalFeesRewardsByPool: RewardTokenInfo[];
  totalIncentivesRewardsByPool: RewardTokenInfo[];
  feesApr: bigint;
  incentivesApr: bigint;
  rebaseApr: bigint;
  tvl: bigint;

  // not necessarily
  poolInfo: {
    address: Address;
    name: string;
    baseTokenAddress: Address;
    quoteTokenAddress: Address;
    initialParameters: {
      I: bigint;
      K: bigint;
      lpFeeRate: bigint;
    };
    liquidity: {
      baseTokenAmount: bigint;
      quoteTokenAmount: bigint;
    };
  };
}

// array of tokens that are allowed to be used as bribe tokens
interface BribeTokensWhitelist {
  address: Address;
}
