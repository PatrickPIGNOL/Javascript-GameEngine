class MenuScene extends Scene
{
    static aInstance = null;
    static get Instance()
    {
        if(MenuScene.aInstance === null)
        {
            MenuScene.aInstance = new MenuScene();
        }
        return MenuScene.aInstance;
    }
    constructor()
    {
        super();
        this.aTimer = 0;
        this.aImages = new Array();
        this.aPattern = new Array();
        this.aClicked = false;
        this.aDown = false;
        this.aMouse = null;
        this.aTouch = null;
        this.aSquareColor = null;
    }

    mLoad()
    {
        let vLoaded = false;
        const vBackGround = new Image();
        vBackGround.src = "./MenuBackGround.png";
        this.aImages.push(vBackGround);
        /*            
            Langues
            Nouveau Jeu
            Charger une partie
            Options
            Crédits
        */
    }

    mUnLoad()
    {
        this.aTimer = 0;
    }

    mUpdate(pDeltaTime)
    {
        this.aTimer += pDeltaTime;
        if(this.aTimer > 10000)
        {
            this.aTimer = 0;
            GameEngine.Instance.mChangeScene(MenuScene.Instance);
            
        }             
    }

    mDraw(pGraphicContext)
    {
        const vCanvas = GameEngine.Instance.Canvas;
        
        pGraphicContext.fillStyle = pGraphicContext.createPattern(this.aImages[0], "repeat");
        //pGraphicContext.drawImage(this.aImages[0], 0, 0);
        
        pGraphicContext.fillStyle = this.aPattern[0];
        pGraphicContext.fillRect(0, 0, vCanvas.width, vCanvas.height);

        pGraphicContext.fillStyle = "rgba(0,255,0,1.0)";
        pGraphicContext.fillText("Menu", 10, 10);
        pGraphicContext.fillStyle = "rgba(255,255,255,1.0)";
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
        console.log("KEYUP !!!");
        console.log("ENDKEYUP !!!");
    }

    mOnMouseDown(pMouseDownEvent)
    {
        this.aDown = true;
    }

    mOnMouseEnter(pMouseEnterEvent)
    {
        console.log("MOUSEENTER !!!");
        console.log("ENDMOUSEENTER !!!");
    }

    mOnMouseLeave(pMouseLeaveEvent)
    {
        console.log("MOUSELEAVE !!!");
        console.log("ENDMOUSELEAVE !!!");
    }
    
    mOnMouseMove(pMouseMoveEvent)
    {
        this.aMouse = pMouseMoveEvent;
    }

    mOnMouseOut(pMouseOutEvent)
    {
        console.log("MOUSEOUT !!!");
        console.log("ENDMOUSEOUT !!!");
    }

    mOnMouseOver(pMouseOverEvent)
    {
        console.log("MOUSEOVER !!!");
        console.log("ENDMOUSEOVER !!!");
    }

    mOnMouseUp(pMouseUpEvent)
    {
        this.aDown = false;
    }
    
    mOnResize()
    {

    }
    
    mOnTouchCancel(pTouchCancelEvent)
    {
        console.log("TOUCHCANCEL !!!");
        console.log("ENDTOUCHCANCEL !!!");
    }

    mOnTouchEnd(pTouchEndEvent)
    {
        console.log("TOUCHEND !!!");
        console.log("ENDTOUCHEND !!!");
    }
    
    mOnTouchLeave(pTouchLeaveEvent)
    {
        console.log("TOUCHLEAVE !!!");
        console.log("ENDTOUCHLEAVE !!!");
    }

    mOnTouchMove(pTouchMoveEvent)
    {
        console.log("TOUCHMOVE !!!");
        console.log("ENDMOVE !!!");
    }

    mOnTouchStart(pTouchStartEvent)
    {
        console.log("TOUCHSTART !!!");
        console.log("ENDTOUCHSTART !!!");
    }
}