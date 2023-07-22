import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  Approval,
  CollateralOwnerTrasnfer,
  DecreaseCollateral,
  DecreaseDebt,
  IncreaseCollateral,
  IncreaseDebt,
  LiquidateCollateral
} from "../generated/Vault/Vault"

export function createApprovalEvent(
  owner: Address,
  operator: Address,
  allow: boolean
): Approval {
  let approvalEvent = changetype<Approval>(newMockEvent())

  approvalEvent.parameters = new Array()

  approvalEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam("operator", ethereum.Value.fromAddress(operator))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam("allow", ethereum.Value.fromBoolean(allow))
  )

  return approvalEvent
}

export function createCollateralOwnerTrasnferEvent(
  from: Address,
  to: Address,
  token: Address,
  tokenAssets: BigInt,
  unitDebt: BigInt
): CollateralOwnerTrasnfer {
  let collateralOwnerTrasnferEvent = changetype<CollateralOwnerTrasnfer>(
    newMockEvent()
  )

  collateralOwnerTrasnferEvent.parameters = new Array()

  collateralOwnerTrasnferEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  collateralOwnerTrasnferEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  collateralOwnerTrasnferEvent.parameters.push(
    new ethereum.EventParam("token", ethereum.Value.fromAddress(token))
  )
  collateralOwnerTrasnferEvent.parameters.push(
    new ethereum.EventParam(
      "tokenAssets",
      ethereum.Value.fromUnsignedBigInt(tokenAssets)
    )
  )
  collateralOwnerTrasnferEvent.parameters.push(
    new ethereum.EventParam(
      "unitDebt",
      ethereum.Value.fromUnsignedBigInt(unitDebt)
    )
  )

  return collateralOwnerTrasnferEvent
}

export function createDecreaseCollateralEvent(
  owner: Address,
  unitDebt: BigInt,
  collateralToken: Address,
  collateralAmount: BigInt,
  liquidationPrice: BigInt
): DecreaseCollateral {
  let decreaseCollateralEvent = changetype<DecreaseCollateral>(newMockEvent())

  decreaseCollateralEvent.parameters = new Array()

  decreaseCollateralEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  decreaseCollateralEvent.parameters.push(
    new ethereum.EventParam(
      "unitDebt",
      ethereum.Value.fromUnsignedBigInt(unitDebt)
    )
  )
  decreaseCollateralEvent.parameters.push(
    new ethereum.EventParam(
      "collateralToken",
      ethereum.Value.fromAddress(collateralToken)
    )
  )
  decreaseCollateralEvent.parameters.push(
    new ethereum.EventParam(
      "collateralAmount",
      ethereum.Value.fromUnsignedBigInt(collateralAmount)
    )
  )
  decreaseCollateralEvent.parameters.push(
    new ethereum.EventParam(
      "liquidationPrice",
      ethereum.Value.fromUnsignedBigInt(liquidationPrice)
    )
  )

  return decreaseCollateralEvent
}

export function createDecreaseDebtEvent(
  owner: Address,
  unitDebt: BigInt,
  collateralToken: Address,
  amount: BigInt,
  liquidationPrice: BigInt
): DecreaseDebt {
  let decreaseDebtEvent = changetype<DecreaseDebt>(newMockEvent())

  decreaseDebtEvent.parameters = new Array()

  decreaseDebtEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  decreaseDebtEvent.parameters.push(
    new ethereum.EventParam(
      "unitDebt",
      ethereum.Value.fromUnsignedBigInt(unitDebt)
    )
  )
  decreaseDebtEvent.parameters.push(
    new ethereum.EventParam(
      "collateralToken",
      ethereum.Value.fromAddress(collateralToken)
    )
  )
  decreaseDebtEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  decreaseDebtEvent.parameters.push(
    new ethereum.EventParam(
      "liquidationPrice",
      ethereum.Value.fromUnsignedBigInt(liquidationPrice)
    )
  )

  return decreaseDebtEvent
}

export function createIncreaseCollateralEvent(
  owner: Address,
  unitDebt: BigInt,
  collateralToken: Address,
  amount: BigInt,
  liquidationPrice: BigInt
): IncreaseCollateral {
  let increaseCollateralEvent = changetype<IncreaseCollateral>(newMockEvent())

  increaseCollateralEvent.parameters = new Array()

  increaseCollateralEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  increaseCollateralEvent.parameters.push(
    new ethereum.EventParam(
      "unitDebt",
      ethereum.Value.fromUnsignedBigInt(unitDebt)
    )
  )
  increaseCollateralEvent.parameters.push(
    new ethereum.EventParam(
      "collateralToken",
      ethereum.Value.fromAddress(collateralToken)
    )
  )
  increaseCollateralEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  increaseCollateralEvent.parameters.push(
    new ethereum.EventParam(
      "liquidationPrice",
      ethereum.Value.fromUnsignedBigInt(liquidationPrice)
    )
  )

  return increaseCollateralEvent
}

export function createIncreaseDebtEvent(
  owner: Address,
  unitDebt: BigInt,
  collateralToken: Address,
  amount: BigInt,
  liquidationPrice: BigInt
): IncreaseDebt {
  let increaseDebtEvent = changetype<IncreaseDebt>(newMockEvent())

  increaseDebtEvent.parameters = new Array()

  increaseDebtEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  increaseDebtEvent.parameters.push(
    new ethereum.EventParam(
      "unitDebt",
      ethereum.Value.fromUnsignedBigInt(unitDebt)
    )
  )
  increaseDebtEvent.parameters.push(
    new ethereum.EventParam(
      "collateralToken",
      ethereum.Value.fromAddress(collateralToken)
    )
  )
  increaseDebtEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  increaseDebtEvent.parameters.push(
    new ethereum.EventParam(
      "liquidationPrice",
      ethereum.Value.fromUnsignedBigInt(liquidationPrice)
    )
  )

  return increaseDebtEvent
}

export function createLiquidateCollateralEvent(
  owner: Address,
  collateralToken: Address,
  tokenAssets: BigInt,
  unitDebt: BigInt,
  feeTo: Address
): LiquidateCollateral {
  let liquidateCollateralEvent = changetype<LiquidateCollateral>(newMockEvent())

  liquidateCollateralEvent.parameters = new Array()

  liquidateCollateralEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  liquidateCollateralEvent.parameters.push(
    new ethereum.EventParam(
      "collateralToken",
      ethereum.Value.fromAddress(collateralToken)
    )
  )
  liquidateCollateralEvent.parameters.push(
    new ethereum.EventParam(
      "tokenAssets",
      ethereum.Value.fromUnsignedBigInt(tokenAssets)
    )
  )
  liquidateCollateralEvent.parameters.push(
    new ethereum.EventParam(
      "unitDebt",
      ethereum.Value.fromUnsignedBigInt(unitDebt)
    )
  )
  liquidateCollateralEvent.parameters.push(
    new ethereum.EventParam("feeTo", ethereum.Value.fromAddress(feeTo))
  )

  return liquidateCollateralEvent
}
