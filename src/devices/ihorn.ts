import * as fz from "../converters/fromZigbee";
import * as tz from "../converters/toZigbee";
import * as exposes from "../lib/exposes";
import * as m from "../lib/modernExtend";
import type {DefinitionWithExtend} from "../lib/types";

const e = exposes.presets;

export const definitions: DefinitionWithExtend[] = [
    {
        zigbeeModel: ["LH09521"],
        model: "LH-09521",
        vendor: "iHORN",
        description: "Indoor siren",
        fromZigbee: [fz.ias_smoke_alarm_1],
        toZigbee: [tz.warning],
        exposes: [e.warning(), e.battery_low(), e.tamper()],
    },
    {
        zigbeeModel: ["113D"],
        model: "LH-32ZB",
        vendor: "iHORN",
        description: "Temperature & humidity sensor",
        fromZigbee: [fz.humidity, fz.temperature, fz.battery],
        toZigbee: [],
        exposes: [e.humidity(), e.temperature(), e.battery()],
    },
    {
        zigbeeModel: ["113C"],
        model: "LH-992ZB",
        vendor: "iHORN",
        description: "Motion sensor",
        fromZigbee: [fz.ias_occupancy_alarm_1],
        toZigbee: [],
        exposes: [e.occupancy(), e.battery_low(), e.tamper()],
    },
    {
        zigbeeModel: ["TI0001 "],
        model: "LH-990ZB",
        vendor: "iHORN",
        description: "PIR motion sensor",
        fromZigbee: [fz.ias_occupancy_alarm_1],
        toZigbee: [],
        exposes: [e.occupancy(), e.battery_low(), e.tamper()],
    },
    {
        zigbeeModel: ["HORN-MECI-A3.9-E"],
        model: "HO-09ZB",
        vendor: "iHORN",
        description: "Door or window contact switch",
        fromZigbee: [fz.ias_contact_alarm_1, fz.battery],
        toZigbee: [],
        exposes: [e.contact(), e.battery_low(), e.tamper(), e.battery()],
    },
    {
        zigbeeModel: ["HORN-PIR--A3.9-E"],
        model: "LH-990F",
        vendor: "iHORN",
        description: "PIR motion sensor",
        fromZigbee: [fz.ias_occupancy_alarm_1],
        toZigbee: [],
        exposes: [e.occupancy(), e.battery_low(), e.tamper()],
    },
    {
        zigbeeModel: ["LH03121"],
        model: "LH03121",
        vendor: "iHORN",
        description: "Door contact DNAKE SH-DM-S01",
        extend: [m.iasZoneAlarm({zoneType: "contact", zoneAttributes: ["alarm_1", "battery_low", "tamper"]}), m.battery()],
    },
];
