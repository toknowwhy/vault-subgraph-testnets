import {
  Approval as ApprovalEvent,
  CollateralOwnerTrasnfer as CollateralOwnerTrasnferEvent,
  DecreaseCollateral as DecreaseCollateralEvent,
  DecreaseDebt as DecreaseDebtEvent,
  IncreaseCollateral as IncreaseCollateralEvent,
  IncreaseDebt as IncreaseDebtEvent,
  LiquidateCollateral as LiquidateCollateralEvent
} from "../generated/Vault/Vault"
import {
  Approval,
  CollateralOwnerTrasnfer,
  VaultAction,
  LiquidateCollateral
} from "../generated/schema"

export function handleApproval(event: ApprovalEvent): void {
  let entity = new Approval(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.owner = event.params.owner
  entity.operator = event.params.operator
  entity.allow = event.params.allow

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleCollateralOwnerTrasnfer(
  event: CollateralOwnerTrasnferEvent
): void {
  let entity = new CollateralOwnerTrasnfer(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.from = event.params.from
  entity.to = event.params.to
  entity.token = event.params.token
  entity.tokenAssets = event.params.tokenAssets
  entity.unitDebt = event.params.unitDebt

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleDecreaseCollateral(event: DecreaseCollateralEvent): void {
  let entity = new VaultAction(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.owner = event.params.owner
  entity.unitDebt = event.params.unitDebt
  entity.collateralToken = event.params.collateralToken
  entity.name = 'DecreaseCollateral'
  entity.liquidationPrice = event.params.liquidationPrice

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleDecreaseDebt(event: DecreaseDebtEvent): void {
  let entity = new VaultAction(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.owner = event.params.owner
  entity.unitDebt = event.params.unitDebt
  entity.collateralToken = event.params.collateralToken
  entity.name = 'DecreaseDebt'
  entity.liquidationPrice = event.params.liquidationPrice

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleIncreaseCollateral(event: IncreaseCollateralEvent): void {
  let entity = new VaultAction(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.owner = event.params.owner
  entity.unitDebt = event.params.unitDebt
  entity.collateralToken = event.params.collateralToken
  entity.name = 'IncreaseCollateral'
  entity.liquidationPrice = event.params.liquidationPrice

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleIncreaseDebt(event: IncreaseDebtEvent): void {
  let entity = new VaultAction(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.owner = event.params.owner
  entity.unitDebt = event.params.unitDebt
  entity.collateralToken = event.params.collateralToken
  entity.name = 'IncreaseDebt'
  entity.liquidationPrice = event.params.liquidationPrice

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleLiquidateCollateral(
  event: LiquidateCollateralEvent
): void {
  let entity = new LiquidateCollateral(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.owner = event.params.owner
  entity.collateralToken = event.params.collateralToken
  entity.tokenAssets = event.params.tokenAssets
  entity.unitDebt = event.params.unitDebt
  entity.feeTo = event.params.feeTo

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
