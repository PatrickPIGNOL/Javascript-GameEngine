const MenuStatus = 
{
    FadeIn:0,
    Wait:1,
    FadeOut:2
};

const MenuImages =
{
    BackGround:0,
    Mouse:1
};

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
        this.aImages = new Array();
        this.aAlpha = 0;
        this.aDown = false;
        this.aMouse = null;
        this.aTimer = 0;
        this.aStatus = MenuStatus.FadeIn;
        this.aWindows = new Array();
    }

    mLoad()
    {
        const vCanvas = GameEngine.Instance.Canvas;

        this.aMouse = null;
        this.aAlpha = 0;
        this.aStatus = MenuStatus.FadeIn;
        this.aImages = new Array();
        this.aTimer = 0;
        const vBackGround = new Image();
        vBackGround.src = "./GUI/MenuBackGround.png";
        this.aImages.push(vBackGround);
        const vMouse = new Image();
        vMouse.src = "./Mouse.png"
        this.aImages.push(vMouse);
        this.aWindows = new Array();
        const vMainMenuWindow = new Window((vCanvas.width-640)/2, (vCanvas.height-480)/2, 640, 480);
        this.aWindows.push(vMainMenuWindow);
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
        switch(this.aStatus)
        {
            case MenuStatus.FadeIn:
            {
                this.aAlpha = this.aTimer / 3000;
                if(this.aTimer > 3000)
                {
                    this.aTimer = 0;
                    this.aStatus = MenuStatus.Wait;
                    this.aWindows[0].mOpen();
                    this.aWindows[0].mUpdate(pDeltaTime);                    
                }   
            }break;
            case MenuStatus.Wait:
            {   
                this.aWindows[0].mUpdate(pDeltaTime);
                if(this.aTimer > 59000)
                {
                    this.aWindows[0].mClose();
                }
                this.aAlpha = 1;
                if(this.aTimer > 60000)
                {
                    this.aTimer = 0;                 
                    this.aStatus = MenuStatus.FadeOut;
                }
            }break;
            case MenuStatus.FadeOut:
            {
                this.aAlpha = 1 - this.aTimer / 3000;
                if(this.aTimer > 3000)
                {
                    this.aTimer = 0;
                    GameEngine.Instance.mChangeScene(IntroScene.Instance);
                }
            }break;
        }
    }

    mDraw(pGraphicContext)
    {
        const vCanvas = GameEngine.Instance.Canvas;
        pGraphicContext.globalAlpha = this.aAlpha;

        pGraphicContext.fillStyle = pGraphicContext.createPattern(this.aImages[MenuImages.BackGround], "repeat");
        pGraphicContext.fillRect(0, 0, vCanvas.width, vCanvas.height);

        pGraphicContext.fillStyle = "rgba(0,255,0,1.0)";
        pGraphicContext.fillText("Menu (" + Math.floor(60 - this.aTimer/1000) + ")", 10, 10);
        pGraphicContext.fillStyle = "rgba(0,0,0,1.0)";
        
        pGraphicContext.globalAlpha = 1;
        this.aWindows.forEach
        (
            vWindowFound=>
            {
                vWindowFound.mDraw(pGraphicContext);
            }
        )
        if(this.aMouse)
        {
            pGraphicContext.drawImage(this.aImages[IntroImages.Mouse], this.aMouse.clientX, this.aMouse.clientY);
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