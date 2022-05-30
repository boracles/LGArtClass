// VisibilityBasedOnBone.js
// Version: 0.0.1
// Event: Initialized
// Description: Controls visibility of mesh depending on tracking state of the corresponding bone.

//@input SceneObject Head 

//@input SceneObject LeftArm
//@input SceneObject LeftForearm
//@input SceneObject LeftHand 

//@input SceneObject RightArm 
//@input SceneObject RightForearm 
//@input SceneObject RightHand

//@input SceneObject LeftUpLeg 
//@input SceneObject LeftLeg
//@input SceneObject LeftFoot

//@input SceneObject RightUpLeg 
//@input SceneObject RightLeg
//@input SceneObject RightFoot


var h3d=script.getSceneObject().getComponent("Component.ObjectTracking3D");
script.createEvent("UpdateEvent").bind(onUpdate);


function onUpdate() {
    if (script.LeftArm) {
        setEnabled(script.LeftArm, "LeftArm");
    }

    if (script.LeftForearm) {
        setEnabled(script.LeftForearm, "LeftForeArm");
    }

    if (script.LeftHand) {
        setEnabled(script.LeftHand, "LeftHand");
    }
    
    if (script.RightArm) {
        setEnabled(script.RightArm, "RightArm");
    }

    if (script.RightForearm) {
        setEnabled(script.RightForearm, "RightForeArm");
    }

    if (script.RightHand) {
        setEnabled(script.RightHand, "RightHand");
    }
    
    if (script.LeftFoot) {
        setEnabled(script.LeftFoot, "LeftFoot");
    }

    if (script.LeftLeg) {
        setEnabled(script.LeftLeg, "LeftLeg");
    }

    if (script.LeftUpLeg) {
        setEnabled(script.LeftUpLeg, "LeftUpLeg");
    }
    
    if (script.RightFoot) {
        setEnabled(script.RightFoot, "RightFoot");
    }

    if (script.RightLeg) {
        setEnabled(script.RightLeg,"RightLeg");
    }

    if (script.RightUpLeg) {
        setEnabled(script.RightUpLeg, "RightUpLeg");
    }
    
    if (script.Head) {
        setEnabled(script.Head, "Head");
    }
}


function setEnabled(mesh, stringname) {
    mesh.enabled= h3d.isAttachmentPointTracking(stringname);
}