import {GraphicComponent} from "./GraphicComponent.js";
import {Loader, EImage, EFonts} from "./Loader.js";
import {MouseFocusable} from "./MouseFocusable.js";

/*
const EButtonStates = Object.freeze
(
    {
        Object:t       
    }
)
*/

export class Button extends MouseFocusable
{
    constructor(pParent, pX, pY, pWidth, pHeight, pText)
    {
        super(pParent, pX, pY, pWidth, pHeight);
        if(this.Parent)
        {
            this.Parent.mAddOnUpdateEventListener(this);
            this.Parent.mAddOnDrawEventListener(this);
        }
        this.MouseFocusable = true;
        this.Visible = true;
        this.aText = pText;
        this.aTimer = 0;
        this.aTextSize = "14px";
        this.aFont = EFonts.Sherif;
        this.aTextColor = "rgba(0, 0, 0, 1.0)";
    }

    get Font()
    {
        return this.aFont;
    }

    set Font(pFont)
    {
        this.aFont = pFont;
    }

    get Text()
    {
        return this.aText;
    }

    set Text(pText)
    {
        this.aText = pText;
    }   

    get TextColor()
    {
        return this.aTextColor;
    }

    set TextColor(pTextColor)
    {
        this.aTextColor = pTextColor;
    }

    get TextSize()
    {
        return this.aTextSize;
    }

    set TextSize(pTextSize)
    {
        this.aTextSize = pTextSize;
    }

    mOnLoadEventHandler()
    {
        this.aClicked = false;
    }

    mOnDrawEventHandler(pCanvas, pGraphicContext)
    {       
		let vImage;
        if(this.Visible)
        {
            pGraphicContext.globalAlpha = this.GlobalAlpha;
            pGraphicContext.save();
            pGraphicContext.translate(this.AbsoluteX, this.AbsoluteY);

            pGraphicContext.fillStyle = pGraphicContext.createPattern(Loader.Images[EImage.ButtonBackGround.Index], "repeat");
            pGraphicContext.fillRect(0, 0, this.Width, this.Height);

			vImage = Loader.Images[EImage.West.Index];
            pGraphicContext.fillStyle = pGraphicContext.createPattern(Loader.Images[EImage.West.Index], "repeat");
            pGraphicContext.fillRect(0, 0, vImage.width, this.Height);

			vImage = Loader.Images[EImage.North.Index];
            pGraphicContext.fillStyle = pGraphicContext.createPattern(Loader.Images[EImage.North.Index], "repeat");
            pGraphicContext.fillRect(0, 0, this.Width, vImage.height);

            pGraphicContext.restore();

            //--------

            pGraphicContext.save();
			vImage = Loader.Images[EImage.East.Index];
            pGraphicContext.translate(this.AbsoluteX + this.Width - vImage.width, this.AbsoluteY);

            pGraphicContext.fillStyle = pGraphicContext.createPattern(vImage, "repeat");
            pGraphicContext.fillRect(0, 0, vImage.width, this.Height);
            pGraphicContext.restore();

            //--------

            pGraphicContext.save();
			vImage = Loader.Images[EImage.South.Index];
            pGraphicContext.translate(this.AbsoluteX, this.AbsoluteY + this.Height - vImage.height);

            pGraphicContext.fillStyle = pGraphicContext.createPattern(vImage, "repeat");
            pGraphicContext.fillRect(0, 0, this.Width, vImage.height);
            
            pGraphicContext.restore();
            
            //---------
			
            pGraphicContext.drawImage(Loader.Images[EImage.CornerNW.Index], this.AbsoluteX, this.AbsoluteY);
			vImage = Loader.Images[EImage.CornerNE.Index];
            pGraphicContext.drawImage(vImage, this.AbsoluteX + this.Width - vImage.width, this.AbsoluteY);
			vImage = Loader.Images[EImage.CornerSE.Index];
            pGraphicContext.drawImage(vImage, this.AbsoluteX + this.Width - 8, this.AbsoluteY + this.Height - vImage.height);
			vImage = Loader.Images[EImage.CornerSW.Index];
            pGraphicContext.drawImage(vImage, this.AbsoluteX, this.AbsoluteY + this.Height - vImage.height);

            pGraphicContext.fillStyle = this.aTextColor;

            pGraphicContext.save();
            pGraphicContext.font = `${this.TextSize} "${this.aFont.Name}"`;
            pGraphicContext.beginPath();
            pGraphicContext.rect(this.AbsoluteX, this.AbsoluteY, this.Width, this.Height);
            pGraphicContext.clip();

            pGraphicContext.fillText(this.aText, this.AbsoluteX, this.AbsoluteY + this.Height-10);
            pGraphicContext.restore();

            pGraphicContext.globalAlpha = 1;
        }
    }
}


//export { EButtonStates };
export default { Button };