import {Scene} from "./Scene.js";
import {Mouse} from "./Mouse.js";
import {Loader} from "./Loader.js";
import {EImages} from "./EImages.js"
import {GameEngine} from "./GameEngine.js";
import {MainMenuScene} from "./MainMenuScene.js";
import {EIntroStatus} from "./EIntroStatus.js";

export class IntroScene extends Scene
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
        this.aTimer = 0;
        this.aClicked = false;
        this.aStatus = EIntroStatus.FadeIn;
        this.aAlpha = 0;
        this.aMouse = Mouse.Instance;
        this.mAddOnAllEventListener(this.aMouse);
    }

    mOnLoadEventHandler()
    {
        this.aMouse = null; 
        document.body.style.cursor = "auto";
        this.aTimer = 0;
        this.aClicked = false;
        this.aStatus = EIntroStatus.FadeIn;
        this.aAlpha = 0;
    }

    mOnUnLoadEventHandler()
    {
        this.aTimer = 0;
        this.aAlpha = 0;
    }
    
    mOnUpdateEventHandler(pCanvas, pDeltaTime)
    {
        super.mOnUpdateEventHandler(pCanvas, pDeltaTime)
        this.aTimer += pDeltaTime;
        switch(this.aStatus)
        {
            case EIntroStatus.FadeIn:
            {
                this.aAlpha = this.aTimer / 3000;
                if(this.aTimer > 3000)
                {
                    this.aTimer = 0;
                    this.aStatus = IntroStatus.Wait;
                }   
            }break;
            case EIntroStatus.Wait:
            {   
                this.aAlpha = 1;
                if(this.aTimer > 3000 || this.aClicked)
                {
                    this.aTimer = 0;                 
                    this.aStatus = IntroStatus.FadeOut;
                }
            }break;
            case EIntroStatus.FadeOut:
            {
                this.aAlpha = 1 - this.aTimer / 3000;
                if(this.aTimer > 3000)
                {
                    this.aTimer = 0;
                    GameEngine.Instance.mChangeScene(MainMenuScene.Instance);
                }
            }break;
        }
    }

    mOnDrawEventHandler(pCanvas, pGraphicContext)
    {
        let vWidth = 0;
        let vHeight = 0;
        let vCoef = 0;
        const vLogo = Loader.Images[EImage.Logo.Index];
        if(pCanvas.width > pCanvas.height)
        {
            vCoef = (pCanvas.height * 0.8) / vLogo.height;
            vWidth = vLogo.width * vCoef;
            vHeight = vLogo.height * vCoef;
        }
        else
        {
            vCoef = (pCanvas.width * 0.8) / vLogo.width;
            vWidth = vLogo.width * vCoef;
            vHeight = vLogo.height * vCoef;
        }
        pGraphicContext.globalAlpha = this.aAlpha;

        pGraphicContext.drawImage(vLogo, (pCanvas.width - vWidth) / 2, (pCanvas.height - vHeight) / 2, vWidth, vHeight);

        pGraphicContext.globalAlpha = 1;
    }       

    mOnClickEventHandler(pClickEvent)
    {
        this.aClicked = true;
    }
    
    mOnMouseMoveEventHandler(pEvent)
    {
        this.aMouse = pEvent;
    }
}
export {IntroScene};
export default {IntroScene};