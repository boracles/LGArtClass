// GetBandByIndex.js
// Version 0.2.0 
// A custom Script Graph node that allows to access Audio Analyzer band value in current frame by index
// Use UpdateEvent as execution input
// @input Component.ScriptComponent audioAnalyzer
// @input int index
// @output Number band

if (!script.audioAnalyzer) {
    print("Warning, Audio Analyzer script input is not set on " + script.getSceneObject().name);
    script.band = 0;
} else {
    script.band = script.audioAnalyzer.api.getBandByIndex(script.index);  
}