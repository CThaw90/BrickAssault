/* collision.js */
function collision() {
    this.objects = {};

    this.registerObject=function(object) {
        this.objects[object.id]=object;
    };

    this.detect=function() {
        if (Object.keys(this.objects).length) {
            console.log("Scanning object space for collisions");

        }
    };
}