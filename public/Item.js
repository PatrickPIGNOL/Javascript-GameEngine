import {MouseFocusable} from "./MouseFocusable.js"
import {Loader} from "./Loader.js"
import {EImages} from "./EImages.js"

export class Item extends MouseFocusable
{
	constructor(pParent, pX, pY, pType, pAmount)
	{
		super(pParent, pX, pY, 32, 32);
		this.aType = pType;
		this.aAmount = Math.floor(Math.random() * 6 + 1);
		if(pAmount)
		{
			this.aAmount = pAmount;
		}
	}

	get Type()
	{
		return this.aType;
	}

	get Amount()
	{
		return this.aAmount;
	}
	set Amount(pAmount)
	{
		this.aAmount = pAmount;
	}

	mCollect(pPlayer)
	{
		switch(this.aType)
		{
			case EItemType.Coin:
			{
				pPlayer.Coins(this.aAmount);
			}break;
			case EItemType.Enemy:
			{
				pPlayer.Life(-this.aAmount);
				pPlayer.Kills(this.aAmount)
			}break;
			case EItemType.Web:
			{
				pPlayer.Coins(-this.aAmount);
				pPlayer.mStop();
			}break;
			case EItemType.Heart:
			{
				pPlayer.Life(this.aAmount);
			}break;
			case EItemType.Stairs:
			{
				pPlayer.mFinishLevel();
			}break;
			default:
			{
				
			}break;
		}
		this.Parent.mRemoveComponent(this);
	}

	mOnUpdate(pCanvas, pDeltaTime)
	{
		
	}

	mOnDrawEventHandler(pCanvas, pGraphicContext)
	{
		switch(this.aType)
		{
			case EItemType.Stairs:
			{
				pGraphicContext.drawImage(Loader.Images[EImages.SpriteSheet.Index], this.aType.X * this.aType.Width, this.aType.Y * this.aType.Height, this.aType.Width, this.aType.Height, this.aParent.AbsoluteX + this.X * 32, this.aParent.AbsoluteY + this.Y * 32, 32, 32);
			}break;
			default:
			{
				pGraphicContext.drawImage(Loader.Images[EImages.SpriteSheet.Index], this.aType.X * this.aType.Width, this.aType.Y * this.aType.Height, this.aType.Width, this.aType.Height, this.aParent.AbsoluteX + this.X * 32, this.aParent.AbsoluteY + this.Y * 32, 32, 32);
				pGraphicContext.fillStyle = "#FFFFFF";
				pGraphicContext.font = '16px serif';
				let vTextMetrics = pGraphicContext.measureText(this.aAmount);
  				pGraphicContext.fillText(this.aAmount, this.aParent.AbsoluteX + this.X * 32 + ((32 - vTextMetrics.width) / 2), this.aParent.AbsoluteY + this.Y * 32 + ((32 - (vTextMetrics.actualBoundingBoxDescent)) / 2)+4);
			}break;
		}
	}
}

export default {Item};