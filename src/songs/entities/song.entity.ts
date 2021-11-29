import { ApiProperty } from "@nestjs/swagger";

export class Song {
    /**
     * The name of the song
     * @example The look
     */
    @ApiProperty({ example: "The look", description: "The name of the song"})
    name: string;

    @ApiProperty({ example: "Look Sharp!", description: "The album the song was first released on"})
    album: string;

    @ApiProperty({ example: 600, description: "The duration in seconds of the song"})
    duration: number;
}
