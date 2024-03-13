// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract Lock {
    mapping(address => uint256) public timeLimits;

    function setTimeLimit(address user, uint256 limit) external {
        timeLimits[user] = block.timestamp + limit;
    }

    function checkTimeLimit(address user) external view returns (bool) {
        return block.timestamp <= timeLimits[user];
    }
}