// RotationHelper.js
// Version: 0.0.1
// Event: FrameUpdated
// Description: Controls rotation of the object.

//@input float speed

var transform = script.getSceneObject().getTransform();

script.createEvent("UpdateEvent").bind(function() {
    var z = getTime() * script.speed;
    var rot = quat.fromEulerAngles(0, z, 0);
    transform.setLocalRotation(rot);
});
