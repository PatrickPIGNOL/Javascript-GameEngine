function mLoadJavascriptFile(pJavaScriptFile, pCallback)
{
    const vJavaScriptFile = document.createElement("script");
    vJavaScriptFile.type = "text/javascript";
    vJavaScriptFile.src = pJavaScriptFile;
    if(pCallback)
    {
        vJavaScriptFile.onload = pCallback;
    }
    document.body.appendChild(vJavaScriptFile);
}

const Browsers = 
{
    None: 0,
    Opera: 1,
    Firefox: 2,
    Safari: 4,
    IE: 8,
    Edge: 16,
    Chrome: 32,
    Chromium: 64,
    Blink: 128
};

function mBrowser()
{    
    let vBrowser = 0;
    if((!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0)
    {
        vBrowser += Browsers.Opera;
    }
    if(typeof InstallTrigger !== 'undefined')
    {
        vBrowser += Browsers.Firefox;
    }
    if(/constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && window['safari'].pushNotification)))
    {
        vBrowser += Browsers.Safari;
    }
    if(false || !!document.documentMode)
    {
        vBrowser += Browsers.IE;
    }
    if(! (vBrowser & Browsers.IE) && !!window.StyleMedia)
    {
        vBrowser += Browsers.Edge;
    }
    if(!!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime))
    {
        vBrowser += Browsers.Chrome;
    }
    if((vBrowser & Browsers.Chrome) && (navigator.userAgent.indexOf("Edg") != -1))
    {
        vBrowser += Browsers.Chromium;
    }
    if((vBrowser & Browsers.Chrome) || (vBrowser & Browsers.Opera) && !!window.CSS)
    {
        vBrowser += Browsers.Blink;
    }
    return vBrowser;
}

let vBrowser = mBrowser();

window.onload = OnWindowLoad;

function OnWindowLoad()
{
    const vHTML = document.getElementById("html");
    vHTML.style.margin = 0;
    vHTML.style.padding = 0;  
    document.body.style.backgroundColor = "#000000";
    document.body.style.margin = 0;
    document.body.style.padding = 0;
    document.body.style.overflow = 'hidden';
    
    mLoadJavascriptFile
    (
        "./Dimensions.js",
        ()=>
        {
            mLoadJavascriptFile
            (
                "./GraphicComponent.js",
                ()=>
                {
                    mLoadJavascriptFile
                    (
                        "./Window.js",
                        ()=>
                        {
                            mLoadJavascriptFile
                            (
                                "./GameEngine.js", 
                                ()=>
                                {
                                    mLoadJavascriptFile
                                    (
                                        "./Scene.js", 
                                        ()=>
                                        {
                                            mLoadJavascriptFile
                                            (
                                                "./IntroScene.js", 
                                                ()=>
                                                {
                                                    mLoadJavascriptFile
                                                    (
                                                        "./MenuScene.js", 
                                                        ()=>
                                                        {
                                                            const vFPS = 30;
                                                            const vCanvas = document.getElementById("canvas");

                        
                                                            vCanvas.style.margin = 0;
                                                            vCanvas.style.padding = 0;
                                                            GameEngine.Instance.mStart(vBrowser, vCanvas, IntroScene.Instance);
                                                            GameEngine.Instance.Canvas.style.cursor = "none";
                                                        }
                                                    );
                                                }
                                            );            
                                        }
                                    );
                                }
                            );
                        }
                    );
                }
            );
        }
    )
}