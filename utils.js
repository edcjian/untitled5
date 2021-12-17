import {Dimensions} from "react-native";
import React from 'react';

const MainHeight = Dimensions.get('window').height;
const MainWidth = Dimensions.get('window').width;
export const ph = e => MainHeight * e / 100
export const pw = e => MainWidth * e / 100
export const pws = e => MainWidth / e
export const phs = e => MainHeight / e
export const gen = e => new Array(e).fill(0)

