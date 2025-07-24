import type { Address } from "viem";

interface UserCurrentVotingRound {
  totalVotingPowerForThisEpoch: bigint; // +
  totalRewards: RewardTokenInfo[];
  userLocks: UserLocks[];
}

type RewardTokenInfo = {
  addressToken: string;
  rewardAmount: bigint;
};

interface UserLocks {
  lockId: string;
  lockedAmount: bigint;
  weight: bigint;
  lockedEnd: bigint;
  voted: boolean;
  totalSupply: bigint;
}

// accepts nft array return array of user positions
interface UserPosition {
  lockId: string;
  lockedAmount: bigint;
  lockedEnd: bigint;
  weight: bigint;
  isAlive: boolean;
  voted: boolean;
  poolContractAddress: Address;
  gaugeContractAddress: Address; //voterContract gauges
  bribeContractAddress: Address; //voterContract gaugeToBribe
  feeContractAddress: Address; //voterContract gaugeToFees

  feeRewards: {
    tokenAddress: Address;
    rewardAmount: bigint;
  }[];

  bribeRewards: {
    tokenAddress: Address;
    rewardAmount: bigint;
  }[];

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
