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
        this.aTimeOut = 0;
        this.aClicked = false;
        this.aImages = new Array();
    }

    mLoad()
    {
        this.aTimeOut = 0;
        this.aClicked = false;
        const vImage = new Image();
        vImage.src = "./Logo.png";
        this.aImages.push(vImage);
    }

    mUnLoad()
    {
        this.aTimeOut = 0;
        this.aClicked = false;
        this.aImages[0].
        this.aImages.clear();
    }
    
    mChange()
    {
        GameEngine.Instance.mChangeScene(MenuScene.Instance);
    }
    
    mUpdate(pDeltaTime)
    {
        this.aTimeOut += pDeltaTime;
        if(this.aTimeOut > 5000 || this.aClicked)
        {
            this.mChange();
        }
    }

    mDraw(pGraphicContext)
    {
        pGraphicContext.fillStyle = "rgba(255,0,0,1.0)";
        pGraphicContext.fillText("Intro : (" + (5 - Math.floor(this.aTimeOut/1000)) + ")", 10, 10);
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