import { MinecraftAtlasIconDto } from '../models/minecraft-atlas-icon.model';

const MINECRAFT_ICON_ATLAS_URL = 'assets/mock/minecraft/icons-atlas.png';
const MINECRAFT_ICON_SIZE = 16;

export const MINECRAFT_ICON_ATLAS_MOCK: Record<string, MinecraftAtlasIconDto> = {
  'minecraft:diamond': {
    id: 'minecraft:diamond',
    atlasUrl: MINECRAFT_ICON_ATLAS_URL,
    x: 304,
    y: 1744,
    width: MINECRAFT_ICON_SIZE,
    height: MINECRAFT_ICON_SIZE,
  },
  'minecraft:stick': {
    id: 'minecraft:stick',
    atlasUrl: MINECRAFT_ICON_ATLAS_URL,
    x: 304,
    y: 560,
    width: MINECRAFT_ICON_SIZE,
    height: MINECRAFT_ICON_SIZE,
  },
  'minecraft:diamond_pickaxe': {
    id: 'minecraft:diamond_pickaxe',
    atlasUrl: MINECRAFT_ICON_ATLAS_URL,
    x: 128,
    y: 1776,
    width: MINECRAFT_ICON_SIZE,
    height: MINECRAFT_ICON_SIZE,
  },
  'minecraft:iron_ingot': {
    id: 'minecraft:iron_ingot',
    atlasUrl: MINECRAFT_ICON_ATLAS_URL,
    x: 448,
    y: 1744,
    width: MINECRAFT_ICON_SIZE,
    height: MINECRAFT_ICON_SIZE,
  },
  'minecraft:gold_ingot': {
    id: 'minecraft:gold_ingot',
    atlasUrl: MINECRAFT_ICON_ATLAS_URL,
    x: 400,
    y: 1744,
    width: MINECRAFT_ICON_SIZE,
    height: MINECRAFT_ICON_SIZE,
  },
  'minecraft:coal': {
    id: 'minecraft:coal',
    atlasUrl: MINECRAFT_ICON_ATLAS_URL,
    x: 288,
    y: 1744,
    width: MINECRAFT_ICON_SIZE,
    height: MINECRAFT_ICON_SIZE,
  },
  'minecraft:oak_planks': {
    id: 'minecraft:oak_planks',
    atlasUrl: MINECRAFT_ICON_ATLAS_URL,
    x: 96,
    y: 448,
    width: MINECRAFT_ICON_SIZE,
    height: MINECRAFT_ICON_SIZE,
  },
  'minecraft:crafting_table': {
    id: 'minecraft:crafting_table',
    atlasUrl: MINECRAFT_ICON_ATLAS_URL,
    x: 256,
    y: 1792,
    width: MINECRAFT_ICON_SIZE,
    height: MINECRAFT_ICON_SIZE,
  },
  'minecraft:furnace': {
    id: 'minecraft:furnace',
    atlasUrl: MINECRAFT_ICON_ATLAS_URL,
    x: 352,
    y: 1792,
    width: MINECRAFT_ICON_SIZE,
    height: MINECRAFT_ICON_SIZE,
  },
  'minecraft:apple': {
    id: 'minecraft:apple',
    atlasUrl: MINECRAFT_ICON_ATLAS_URL,
    x: 384,
    y: 1584,
    width: MINECRAFT_ICON_SIZE,
    height: MINECRAFT_ICON_SIZE,
  },
};
