// GetAllBands.js
// Version 0.2.0 
// A custom Script Graph node that allows to access all Audio Analyzer band values in current frame
// Use UpdateEvent as execution input
// @input Component.ScriptComponent audioAnalyzer
// @output Number[] bands
// @output Number average

if (!script.audioAnalyzer) {
    print("Warning, Audio Analyzer script can't be found");
} else {
    script.bands = script.audioAnalyzer.api.getBands();
    script.average = script.audioAnalyzer.api.getAverage();
}