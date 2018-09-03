import { injectable, inject } from 'inversify';
import "reflect-metadata";
import { Weapon, ThrowableWeapon, Warrior, ILogger } from "./interfaces"
import { TYPES } from "./types";

@injectable()
class Logger implements ILogger {
    public log(msg: string): any {
        return msg;
    }
}

@injectable()
class Katana implements Weapon {
    private _logger: ILogger;

    public constructor(@inject(TYPES.ILogger) logger: ILogger) {
        this._logger = logger;
    }
    public hit() {
        return this._logger.log("Fight!");
    }
}

@injectable()
class Shuriken implements ThrowableWeapon {
    private _logger: ILogger;

    public constructor(@inject(TYPES.ILogger) logger: ILogger) {
        this._logger = logger;
    }

    public throw() {
        return this._logger.log("Hit!");
    }
}

@injectable()
class Ninja implements Warrior {

    private _katana: Weapon;
    private _shuriken: ThrowableWeapon;

    public constructor(
	    @inject(TYPES.Weapon) katana: Weapon,
        @inject(TYPES.ThrowableWeapon) shuriken: ThrowableWeapon,
    ) {
        this._katana = katana;
        this._shuriken = shuriken;
    }

    public fight() { return this._katana.hit(); }
    public sneak() { return this._shuriken.throw(); }

}

export { Ninja, Katana, Shuriken, Logger };