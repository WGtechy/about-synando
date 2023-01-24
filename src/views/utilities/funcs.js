let startingX;
export const startHandler =(e, style)=>{
let startingX = e.touches[0].clientX;
style.position = 'relative' 

}
export const moveHandler =(e, style )=>{
    let touch = e.touches[0]
    let change = startingX - touch.clientX
    style.position = 'relative'


}
export const endHandler =()=>{

}