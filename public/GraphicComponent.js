class GraphicComponent
{
    constructor(pX, pY, pWidth, pHeight)
    {
        this.aX = pX;
        this.aY = pY;
        this.aWidth = pWidth;
        this.aHeight = pHeight;
        this.aVisible = false;
        this.aMouse = null;   
        this.aMouseFocusable = false;     
        this.aMouseFocus = null;
    }

    get X()
    {
        return this.aX;
    }

    set X(pX)
    {
        this.aX = pX;
    }

    get Y()
    {
        return this.aY;
    }

    set Y(pY)
    {
        this.aY = pY;
    }

    get Width()
    {
        return this.aWidth;
    }

    set Width(pWidth)
    {
        this.aWidth = pWidth;
    }

    get Height()
    {
        return this.aHeight;
    }

    set Height(pHeight)
    {
        this.aHeight = pHeight;
    }    

    get Visible()
    {
        return this.aVisible;
    }

    set Visible(pVisible)
    {
        this.aVisible = pVisible
    }

    get MouseFocus()
    {
        return this.aMouseFocus;
    }

    set MouseFocus(pMouseFocus)
    {
        this.aMouseFocus = pMouseFocus;
    }
    
    get MouseFocusable()
    {
        return this.aMouseFocusable;
    }

    set MouseFocusable(pMouseFocusable)
    {
        this.aMouseFocusable = pMouseFocusable;
    }

    mUpdateMouseFocus(pMouse)
    {
        this.aMouse = pMouse;
        if(this.aMouse)
        {
            if
            (
                (this.aMouse.clientX >= this.aX) 
                && 
                (this.aMouse.clientX <= this.aX + this.aWidth)
                &&
                (this.aMouse.clientY >= this.aY)
                &&
                (this.aMouse.clientY <= this.aY + this.aHeight)
            )
            {
                this.aComponents.forEach
                (
                    vComponentFound =>
                    {
                        this.aMouseFocus = vComponentFound.mUpdateMouseFocus(pMouse);
                    }
                );   
                if(this.aMouseFocus === null)        
                {
                    if(this.aMouseFocusable)
                    {
                        this.aMouseFocus = this;
                    }
                }
            }
        }
        else
        {
            this.aMouseFocus = null;
        }
        return this.aMouseFocus;
    }

    mUpdate(pDeltaTime)
    {
        throw new Error('You must implement this function');
    }

    mDraw(pGraphicContext)
    {
        throw new Error('You must implement this function');
    }
}