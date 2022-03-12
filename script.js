const slider = document.getElementById('slider')
const counter = document.getElementById('slider-counter')

const realInput = document.getElementById('real-part')
const imaginaryInput = document.getElementById('imaginary-part')
const show = document.getElementById('show')

slider.addEventListener('input', main)


function main()
{
    let a = realInput.value
    let b = imaginaryInput.value
    
    let angle = Math.atan(b / a)
    let module = Math.sqrt(a**2 + b**2)
    const len = module + 1.5
    
    const board = JXG.JSXGraph.initBoard('jxgbox', {
        boundingbox: [-len, len, len, -len], axis: true
    });
    
    let n = slider.value
    counter.innerText = slider.value
    let k = n - 1
    
    if(a != '' && b != '')
    {
        show.innerText = `Radice ${n} di ${a} + ${b}i :`
    }

    let x, y, alpha
    let x1, y1, startx, starty

    let scale = 1

    for(let i = 0; i <= k; i++)
    {
        alpha = (angle + (2 * i * Math.PI)) / n
        x = module * Math.cos(alpha) * scale
        y = module * Math.sin(alpha) * scale

        if(i == 0)
        {
            starty = module * Math.sin(alpha) * scale
            startx = module * Math.cos(alpha) * scale
        }
        if(i > 0)
            board.create('segment', [[x1, y1], [x, y]])
        x1 = x
        y1 = y

        if(i == k)
            board.create('segment', [[x, y], [startx, starty]])

        board.create('arrow', [[0, 0] , [x, y]])
    }
    
}

main()