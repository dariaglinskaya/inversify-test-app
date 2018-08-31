export interface Warrior {
    fight(): string;
    sneak(): string;
}
export interface ILogger {
    log(msg: string): any;
}
export interface Weapon {
    hit(): string;
}

export interface ThrowableWeapon {
    throw(): string;
}