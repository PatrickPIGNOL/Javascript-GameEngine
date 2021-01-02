const IntroStatus = 
{
    FadeIn:0,
    Wait:1,
    FadeOut:2
};

const IntroImages =
{
    Logo: 0,
    Mouse: 1
};

class IntroScene extends Scene
{
    static aInstance = null;
    static get Instance()
    {
        if(IntroScene.aInstance === null)
        {
            IntroScene.aInstance = new IntroScene();
        }
        return IntroScene.aInstance;
    }
    constructor()
    {
        super();
        this.aImages = new Array();
        this.aTimeOut = 0;
        this.aClicked = false;
        this.aStatus = IntroStatus.FadeIn;
        this.aAlpha = 0;
        this.aMouse = null;
    }

    mLoad()
    {
        this.aMouse = null;
        this.aImage = new Array();
        const vLogo = new Image();
        vLogo.src = "./Logo.png";
        this.aImages.push(vLogo);  
        const vMouse = new Image();
        vMouse.src = "./Mouse.png"
        this.aImages.push(vMouse);      
        document.body.style.cursor = "auto";
        this.aTimeOut = 0;
        this.aClicked = false;
        this.aStatus = IntroStatus.FadeIn;
        this.aAlpha = 0;
    }

    mUnLoad()
    {
        this.aTimeOut = 0;
        this.aAlpha = 0;
    }
    
    mUpdate(pDeltaTime)
    {
        this.aTimeOut += pDeltaTime;
        switch(this.aStatus)
        {
            case IntroStatus.FadeIn:
            {
                this.aAlpha = this.aTimeOut / 3000;
                if(this.aTimeOut > 3000)
                {
                    this.aTimeOut = 0;
                    this.aStatus = IntroStatus.Wait;
                }   
            }break;
            case IntroStatus.Wait:
            {   
                this.aAlpha = 1;
                if(this.aTimeOut > 3000 || this.aClicked)
                {
                    this.aTimeOut = 0;                 
                    this.aStatus = IntroStatus.FadeOut;
                }
            }break;
            case IntroStatus.FadeOut:
            {
                this.aAlpha = 1 - this.aTimeOut / 3000;
                if(this.aTimeOut > 3000)
                {
                    this.aTimeOut = 0;
                    GameEngine.Instance.mChangeScene(MenuScene.Instance);
                }
            }break;
        }
    }

    mDraw(pGraphicContext)
    {
        const vCanvas = GameEngine.Instance.Canvas;

        let vWidth = 0;
        let vHeight = 0;
        let vCoef = 0;
        const vLogo = this.aImages[IntroImages.Logo];
        if(vCanvas.width > vCanvas.height)
        {
            vCoef = (vCanvas.height * 0.8) / vLogo.height;
            vWidth = vLogo.width * vCoef;
            vHeight = vLogo.height * vCoef;
        }
        else
        {
            vCoef = (vCanvas.width * 0.8) / vLogo.width;
            vWidth = vLogo.width * vCoef;
            vHeight = vLogo.height * vCoef;
        }
        
        pGraphicContext.globalAlpha = this.aAlpha;

        pGraphicContext.drawImage(vLogo, (vCanvas.width - vWidth) / 2, (vCanvas.height - vHeight) / 2, vWidth, vHeight);

        pGraphicContext.globalAlpha = 1;

        if(this.aMouse)
        {
            pGraphicContext.drawImage(this.aImages[IntroImages.Mouse], this.aMouse.clientX, this.aMouse.clientY);
        }
    }       

    mOnClick(pClickEvent)
    {
        this.aClicked = true;
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