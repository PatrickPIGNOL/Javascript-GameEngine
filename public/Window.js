const WindowImages =
{    
    BackGround: 0,
    North: 1,
    East: 2,
    CornerNE: 3,
    South: 4,
    CenterVertical: 5,
    CornerSE: 6,
    TEast: 7,
    West: 8,
    CornerNW: 9,
    CenterHorizontal: 10,
    TNorth: 11,
    CornerSW: 12,
    TWest: 13,
    TSouth: 14,
    CenterX: 15,
};

const WindowState = 
{
    Opening: {
        Width: 0,
        Height: 1,
        FadeIn: 2
    },
    Opened: 3,
    Closing: {
        FadeOut: 4,
        Height: 5,
        Width: 6
    },
    Closed: 7
}
class Window extends GraphicComponent
{
    constructor(pX, pY, pWidth, pHeight)
    {
        super(pX, pY, pWidth, pHeight);
        this.aMaxWidth = pWidth;
        this.aMaxHeight = pHeight;
        this.MouseFocusable = true;
        this.aComponents = new Array();
        this.aImages = new Array();
        this.aState = WindowState.Opening.Width;
        this.aTimer = 0;
    }

    mOpen()
    {
        this.mLoad();
        this.aState = WindowState.Opening.Width;
        this.Visible = true;
    }

    mClose()
    {
        if(this.aState === WindowState.Opened)
        {
            this.aState = WindowState.Closing.FadeOut;
            this.aTimer = 0;
        }
    }

    mLoad()
    {
        /*
        CenterX: 15,
        */
        this.aImages = new Array();
        this.aTimer = 0;
        const vBackGround = new Image();
        vBackGround.src = "./GUI/WindowBackGround.png";
        this.aImages.push(vBackGround);
        const vNorth = new Image();
        vNorth.src = "./GUI/North.png";
        this.aImages.push(vNorth);
        const vEast = new Image();
        vEast.src = "./GUI/East.png";
        this.aImages.push(vEast);
        const vCornerNE = new Image();
        vCornerNE.src = "./GUI/CornerNE.png";
        this.aImages.push(vCornerNE);
        const vSouth = new Image();
        vSouth.src = "./GUI/South.png";
        this.aImages.push(vSouth);
        const vCenterVertical = new Image();
        vCenterVertical.src = "./GUI/CenterVertical.png";
        this.aImages.push(vCenterVertical);
        const vCornerSE = new Image();
        vCornerSE.src = "./GUI/CornerSE.png";
        this.aImages.push(vCornerSE);
        const vTEast = new Image();
        vTEast.src = "./GUI/TEast.png";
        this.aImages.push(vTEast);
        const vWest = new Image();
        vWest.src = "./GUI/West.png";
        this.aImages.push(vWest);
        const vCornerNW = new Image();
        vCornerNW.src = "./GUI/CornerNW.png";
        this.aImages.push(vCornerNW);
        const vCenterHorizontal = new Image();
        vCenterHorizontal.src = "./GUI/CenterHorizontal.png";
        this.aImages.push(vCenterHorizontal);
        const vTNorth = new Image();
        vTNorth.src = "./GUI/TNorth.png";
        this.aImages.push(vTNorth);
        const vCornerSW = new Image();
        vCornerSW.src = "./GUI/CornerSW.png";
        this.aImages.push(vCornerSW);
        const vTWest = new Image();
        vTWest.src = "./GUI/TWest.png";
        this.aImages.push(vTWest);
        const vTSouth = new Image();
        vTSouth.src = "./GUI/TSouth.png";
        this.aImages.push(vTSouth);
        const vCenterX = new Image();
        vCenterX.src = "./GUI/CenterX.png";
        this.aImages.push(vCenterX);

        this.aComponentsAlpha = 0;
    }

    mUnload()
    {

    }

    mAddComponent(pComponent)
    {
        this.aComponents.push(pComponent);
    }

    mUpdate(pDeltaTime)
    {
        this.aTimer += pDeltaTime;
        this.Width = 16;
        this.Height = 16;
        if(this.Visible)
        {
            switch(this.aState)
            {
                case WindowState.Opening.Width:
                {
                    this.Width = this.aTimer * this.aMaxWidth / 250;
                    this.aComponentsAlpha = 0;
                    if(this.aTimer >= 250)
                    {
                        this.aTimer = 0;
                        this.aState = WindowState.Opening.Height;
                    }                
                }break;
                case WindowState.Opening.Height:
                {
                    this.Width = this.aMaxWidth;
                    this.Height = this.aTimer * this.aMaxHeight / 250;
                    this.aComponentsAlpha = 0;
                    if(this.aTimer >= 250)
                    {
                        this.aTimer = 0;
                        this.aState = WindowState.Opening.FadeIn;
                    }                
                }break;
                case WindowState.Opening.FadeIn:
                {
                    this.Width = this.aMaxWidth;
                    this.Height = this.aMaxHeight;
                    this.aComponentsAlpha = this.aTimer / 250;
                    if(this.aTimer >= 250)
                    {
                        this.aTimer = 0;
                        this.aState = WindowState.Opened;
                    }
                }break;
                case WindowState.Opened:
                {
                    this.Width = this.aMaxWidth;
                    this.Height = this.aMaxHeight;
                    this.aComponentsAlpha = 1;
                }break;
                case WindowState.Closing.FadeOut:
                {                    
                    this.Width = this.aMaxWidth;
                    this.Height = this.aMaxHeight;
                    this.aComponentsAlpha = 1 - this.aTimer / 250;
                    if(this.aTimer >= 250)
                    {
                        this.aTimer = 0;
                        this.aState = WindowState.Closing.Height;
                    }
                }break;
                case WindowState.Closing.Height:
                {                    
                    this.Width = this.aMaxWidth;
                    this.Height = this.aMaxHeight - this.aTimer * this.aMaxHeight / 250;
                    this.aComponentsAlpha = 0;
                    if(this.aTimer >= 250)
                    {
                        this.aTimer = 0;
                        this.aState = WindowState.Closing.Width;
                    }
                }break;
                case WindowState.Closing.Width:
                {                    
                    this.Width = this.aMaxWidth - this.aTimer * this.aMaxWidth / 250;
                    this.Height = 16;
                    this.aComponentsAlpha = 0;
                    if(this.aTimer >= 250)
                    {
                        this.aTimer = 0;
                        this.aState = WindowState.Closed;
                    }
                }break;
                case WindowState.Closed:
                {                    
                    this.Width = 16;
                    this.Height = 16;
                    this.aComponentsAlpha = 0;
                    this.Visible = false;
                }break;
            };
        }
    }

    mDraw(pGraphicContext)
    {
        const vCanvas = GameEngine.Instance.Canvas;
        if(this.Visible)
        {
            pGraphicContext.save();
            pGraphicContext.translate(this.X, this.Y);

            pGraphicContext.fillStyle = pGraphicContext.createPattern(this.aImages[WindowImages.BackGround], 
            "repeat");
            pGraphicContext.fillRect(0, 0, this.Width, this.Height);

            pGraphicContext.fillStyle = pGraphicContext.createPattern(this.aImages[WindowImages.West], "repeat");
            pGraphicContext.fillRect(0, 0, 8, this.Height);

            pGraphicContext.fillStyle = pGraphicContext.createPattern(this.aImages[WindowImages.North], "repeat");
            pGraphicContext.fillRect(0, 0, this.Width, 8);

            pGraphicContext.restore();

            //--------

            pGraphicContext.save();
            pGraphicContext.translate(this.X + this.Width - 8, this.Y);

            pGraphicContext.fillStyle = pGraphicContext.createPattern(this.aImages[WindowImages.East], "repeat");
            pGraphicContext.fillRect(0, 0, 8, this.Height);
            
            pGraphicContext.restore();

            //--------

            pGraphicContext.save();
            pGraphicContext.translate(this.X, this.Y + this.Height - 8);

            pGraphicContext.fillStyle = pGraphicContext.createPattern(this.aImages[WindowImages.South], "repeat");
            pGraphicContext.fillRect(0, 0, this.Width, 8);
            
            pGraphicContext.restore();
            
            //---------

            pGraphicContext.drawImage(this.aImages[WindowImages.CornerNW], this.X, this.Y);
            pGraphicContext.drawImage(this.aImages[WindowImages.CornerNE], this.X + this.Width - 8, this.Y);
            pGraphicContext.drawImage(this.aImages[WindowImages.CornerSE], this.X + this.Width - 8, this.Y + this.Height - 8);
            pGraphicContext.drawImage(this.aImages[WindowImages.CornerSW], this.X, this.Y + this.Height - 8);

            switch(this.aState)
            {
                case WindowState.Opened:
                {
                    pGraphicContext.globalAlpha = this.aComponentsAlpha;
                    this.aComponents.forEach
                    (
                        vComponentFound =>
                        {
                            vComponentFound.mDraw(pGraphicContext);
                        }
                    );
                    pGraphicContext.globalAlpha = 1;
                }
            };

            pGraphicContext.restore();
        }
    }   

    mOnClick(pClickEvent)
    {

    }

    mOnDoubleClick(pDoubleClickEvent)
    {
        
    }

    mOnKeyDown(pKeyDownEvent)
    {
    }

    mOnKeyUp(pKeyUpEvent)
    {
        
    }

    mOnMouseDown(pMouseDownEvent)
    {
        
    }

    mOnMouseEnter(pMouseEnterEvent)
    {
        
    }

    mOnMouseLeave(pMouseLeaveEvent)
    {
        
    }
    
    mOnMouseMove(pMouseMoveEvent)
    {
        this.aMouse = pMouseMoveEvent;
        this.aMouseFocus = this.mUpdateMouseFocus(pMouseMoveEvent);
    }

    mOnMouseOut(pMouseOutEvent)
    {
        
    }

    mOnMouseOver(pMouseOverEvent)
    {

    }

    mOnMouseUp(pMouseUpEvent)
    {

    }
    
    mOnResize()
    {

    }
    
    mOnTouchCancel(pTouchCancelEvent)
    {

    }

    mOnTouchEnd(pTouchEndEvent)
    {

    }
    
    mOnTouchLeave(pTouchLeaveEvent)
    {

    }

    mOnTouchMove(pTouchMoveEvent)
    {

    }

    mOnTouchStart(pTouchStartEvent)
    {

    }
}