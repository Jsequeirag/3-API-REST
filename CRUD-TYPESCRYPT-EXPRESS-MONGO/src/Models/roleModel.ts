import { getModelForClass, prop } from "@typegoose/typegoose";
export class Role {
  @prop({
    required: true,
  })
  name: string;
}
export const roleModel = getModelForClass(Role);
