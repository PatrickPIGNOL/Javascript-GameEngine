class GameEngine
{
    static aInstance = null;
    static get Instance()
    {
        if(GameEngine.aInstance === null)
        {
            GameEngine.aInstance = new GameEngine();
        }
        return GameEngine.aInstance;
    }
    constructor()
    {
        this.aScene = null;
        this.aBrowser = null;
        this.aCanvas = null;       
        this.aOldTime = performance.now();
        this.aLoopTimeOut = -1;
    }

    mBrowser(pBrowser)
    {
        this.aBrowser = pBrowser;
    }

    mCanvas(pCanvas)
    {
        this.aCanvas = pCanvas;
        this.aCanvas.addEventListener
        (
            "click",
            pClickEvent =>
            {
                GameEngine.Instance.mOnClick(pClickEvent);
            }
        );
        this.aCanvas.addEventListener
        (
            "dblclick",
            pDoubleClickEvent => 
            {
                GameEngine.Instance.mOnDoubleClick(pDoubleClickEvent);
            }
        );

        this.aCanvas.addEventListener
        (
            "keydown",
            pKeyDownEvent =>
            {
                GameEngine.Instance.mOnKeyDown(pKeyDownEvent);
            }
        );

        this.aCanvas.addEventListener
        (
            'keyup', 
            pKeyUpEvent =>
            {
                GameEngine.Instance.mOnKeyUp(pKeyUpEvent);
            }
        );

        this.aCanvas.addEventListener
        (
            "mousedown",
            pMouseDownEvent =>
            {
                GameEngine.Instance.mOnMouseDown(pMouseDownEvent);
            }
        );
        this.aCanvas.addEventListener
        (
            'mouseenter',
            pMouseEnterEvent => 
            {
                GameEngine.Instance.mOnMouseEnter(pMouseEnterEvent);
            }
        );
        this.aCanvas.addEventListener
        (
            'mouseleave',
            pMouseLeaveEvent => 
            {
                GameEngine.Instance.mOnMouseLeave(pMouseLeaveEvent);
            }
        );
        this.aCanvas.addEventListener
        (
            "mousemove",
            pMouseMoveEvent =>
            {       
                GameEngine.Instance.mOnMouseMove(pMouseMoveEvent);
            }
        );
        this.aCanvas.addEventListener
        (
            "mouseout",
            pMouseOutEvent =>
            {       
                GameEngine.Instance.mOnMouseOut(pMouseOutEvent);
            }
        );
        this.aCanvas.addEventListener
        (
            "mouseover",
            pMouseOverEvent =>
            {
                GameEngine.Instance.mOnMouseOver(pMouseOverEvent);
            }
        );
        this.aCanvas.addEventListener
        (
            "mouseup",
            pMouseUpEvent =>
            {
                GameEngine.Instance.mOnMouseUp(pMouseUpEvent)
            }
        );   
        this.aCanvas.addEventListener
        (
            "touchcancel",
            pTouchCancelEvent =>
            {
                GameEngine.Instance.mOnTouchCancel(pTouchCancelEvent);
            },
            false
        );
        this.aCanvas.addEventListener
        (
            "touchend",
            pTouchEndEvent =>
            {
                GameEngine.Instance.mOnTouchEnd(pTouchEndEvent);
            },
            false
        );
        this.aCanvas.addEventListener
        (
            "touchleave",
            pTouchLeaveEvent =>
            {
                GameEngine.Instance.mOnTouchLeave(pTouchLeaveEvent);
            },
            false
        );
        this.aCanvas.addEventListener
        (
            "touchmove",
            pTouchMoveEvent =>
            {
                GameEngine.Instance.mOnTouchMove(pTouchMoveEvent);
            },
            false
        );
        this.aCanvas.addEventListener
        (
            "touchstart",
            pTouchStartEvent =>
            {
                GameEngine.Instance.mOnTouchStart(pTouchStartEvent);
            },
            false
        );
        this.aContext = this.aCanvas.getContext('2d');
    }

    mStart(pBrowser, pCanvas, pScene)
    {
        let vFPS = 30; //30 FPS max
        this.mBrowser(pBrowser);
        this.mCanvas(pCanvas);
        this.mChangeScene(pScene);
        window.onresize = ()=>
        {
            GameEngine.Instance.mOnResize();
        };
        window.setInterval
        (
            ()=>
            {
                GameEngine.Instance.mLoop();
            }, 
            1000/vFPS
        );              
    }

    mUpdate(pDeltaTime)
    {
        if
        (
            (this.aBrowser & Browsers.Chromium)
            ||
            (this.aBrowser & Browsers.Chrome)
        )
        {
            this.aCanvas.width = window.innerWidth - 1;
            this.aCanvas.height = window.innerHeight - 1;
        }
        else
        {
            this.aCanvas.width = window.innerWidth;
            this.aCanvas.height = window.innerHeight;
        }
        this.aScene.mUpdate(pDeltaTime);
    }
    
    mDraw(pGraphicContext)
    {
        if(pGraphicContext)
        {
            pGraphicContext.clearRect(0, 0, this.Canvas.width, this.Canvas.height);
            this.aScene.mDraw(pGraphicContext);
        }
        else
        {
            document.write("Canvas are not supported");
        }        
    }
    
    mLoop()
    {
        const vNewTime = performance.now();
        const vDeltaTime = vNewTime - this.aOldTime;
        this.aOldTime = vNewTime;
        this.mUpdate(vDeltaTime);
        this.mDraw(this.aCanvas.getContext('2d'));
    }

    mOnClick(pClickEvent)
    {
        this.aScene.mOnClick(pClickEvent);
    }

    mOnDoubleClick(pDoubleClickEvent)
    {
        this.aScene.mOnDoubleClick(pDoubleClickEvent);
    }

    mOnKeyDown(pKeyDownEvent)
    {
        this.aScene.mOnKeyDown(pKeyDownEvent);
    }

    mOnKeyUp(pKeyUpEvent)
    {
        this.aScene.mOnKeyUp(pKeyUpEvent);
    }

    mOnMouseDown(pMouseDownEvent)
    {
        this.aScene.mOnMouseDown(pMouseDownEvent);
    }

    mOnMouseEnter(pMouseEnterEvent)
    {
        this.aScene.mOnMouseEnter(pMouseEnterEvent);
    }

    mOnMouseLeave(pMouseLeaveEvent)
    {
        this.aScene.mOnMouseLeave(pMouseLeaveEvent);
    }
    
    mOnMouseMove(pMouseMoveEvent)
    {
        this.aScene.mOnMouseMove(pMouseMoveEvent);
    }

    mOnMouseOut(pMouseOutEvent)
    {
        this.aScene.mOnMouseMove(pMouseOutEvent);
    }

    mOnMouseOver(pMouseOverEvent)
    {
        this.aScene.mOnMouseOver(pMouseOverEvent);
    }

    mOnMouseUp(pMouseUpEvent)
    {
        this.aScene.mOnMouseUp(pMouseUpEvent);
    }
    
    mOnResize()
    {
        this.aScene.mOnResize()
    }
    
    mOnTouchCancel(pTouchCancelEvent)
    {
        this.aScene.mOnTouchCancel(pTouchCancelEvent);
    }

    mOnTouchEnd(pTouchEndEvent)
    {
        this.aScene.mOnTouchEnd(pTouchEndEvent);
    }
    
    mOnTouchLeave(pTouchLeaveEvent)
    {
        this.aScene.mOnTouchLeave(pTouchLeaveEvent);
    }

    mOnTouchMove(pTouchMoveEvent)
    {
        this.aScene.mOnTouchMove(pTouchMoveEvent);
    }

    mOnTouchStart(pTouchStartEvent)
    {
        this.aScene.mOnTouchMove(pTouchMoveEvent);
    }
    
    mChangeScene(pScene)
    {
        if(this.aScene)
        {
            this.aScene.mUnLoad();
        }
        this.aScene = pScene;
        this.aScene.mLoad();
    }

    get Canvas()
    {
        return this.aCanvas;
    }
    get LoopTimeOut()
    {
        return this.aLoopTimeOut;
    }
    set LoopTimeOut(pLoopTimeout)
    {
        this.aLoopTimeOut = pLoopTimeout;
    }
}