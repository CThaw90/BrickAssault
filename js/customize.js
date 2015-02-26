var ball,
    bounds,
    platform,
    collision,
    event;

function customizedLevel() {
	var s=document.getElementById("startMessage");
    s.parentNode.removeChild(s);
    bounds=new Bound();
    event = new Event(bounds, undefined, undefined, undefined);

    bounds.drawGameSpace();
}