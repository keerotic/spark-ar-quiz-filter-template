const Scene = require('Scene');
const Patches = require('Patches');
const Reactive = require('Reactive');
export const Diagnostics = require('Diagnostics');

Patches.outputs.getPulse('reset').then(evt=>{
    evt.subscribe(()=>{
        Patches.inputs.setPulse('doReset',Reactive.once());
    });
});