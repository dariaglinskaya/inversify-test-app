import { Container } from "inversify";
import { TYPES } from "./types";
import { Warrior, Weapon, ThrowableWeapon, ILogger } from "./interfaces";
import { Ninja, Katana, Shuriken, Logger } from "./entities";

const myContainer = new Container();
myContainer.bind<Warrior>(TYPES.Warrior).to(Ninja);
myContainer.bind<Weapon>(TYPES.Weapon).to(Katana);
myContainer.bind<ThrowableWeapon>(TYPES.ThrowableWeapon).to(Shuriken);
myContainer.bind<ILogger>(TYPES.ILogger).to(Logger);

export { myContainer };