//* These mongo docs seem to work fine
// https://mongodb.github.io/node-mongodb-native/3.6/api/Collection.html#findOneAndUpdate

import Mongo from "./mongo";
import { mongoUrl } from "../helpers";

console.log("🔗 Connecting to ", mongoUrl, "\n🔗 successful database connections made to the following");

// Devices
export const rgbLightStore = new Mongo("devices", "rgbLights").collection;
export const radiatorStore = new Mongo("devices", "radiators").collection;
export const offsetStore = new Mongo("devices", "offsets").collection;
export const sensorStore = new Mongo("devices", "sensors").collection;
export const valveStore = new Mongo("devices", "valves").collection;
export const plugStore = new Mongo("devices", "plugs").collection;
export const rasiatorStore = new Mongo("devices", "radiators").collection;

// Heating Controller
export const setpointsStore = new Mongo("heatingController", "setpoints").collection;
export const roomStore = new Mongo("heatingController", "rooms").collection;
export const timerStore = new Mongo("heatingController", "timers").collection;

export const specialsStore = new Mongo("devices", "specials").collection;

export const options: Options = { returnDocument: "after", upsert: true };

export interface Options {
  returnDocument: "before" | "after";
  upsert: boolean;
}
