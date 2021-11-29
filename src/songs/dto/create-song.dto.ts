import { IsInt, IsString } from 'class-validator';

export class CreateSongDto {
    @IsString()
    readonly name: string;

    @IsString()
    readonly album: string;

    @IsInt()
    readonly duration: number;
}
