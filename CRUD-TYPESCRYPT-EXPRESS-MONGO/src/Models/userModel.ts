import {
  getModelForClass,
  prop,
  modelOptions,
  pre,
} from "@typegoose/typegoose";

import bcrypt from "bcryptjs";

@pre<User>("save", async function () {
  this.password = await bcrypt.hash(this.password, 10);
})
@modelOptions({ schemaOptions: { versionKey: false, timestamps: true } })
export class User {
  @prop({ required: true, unique: true })
  username: string;
  @prop({ required: true, unique: true })
  email: string;
  @prop({ required: true })
  password: string;
  @prop({ required: true })
  role: string;
}

export const userModel = getModelForClass(User);
