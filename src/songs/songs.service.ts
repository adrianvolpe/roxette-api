import { Injectable } from '@nestjs/common';
import { CreateSongDto } from './dto/create-song.dto';
//import { UpdateSongDto } from './dto/update-song.dto';
import { Song } from './entities/song.entity';
import Data  from "./data/songs.json";
@Injectable()
export class SongsService {

  private readonly songs: Song[] = [];
  
  constructor() {
    this.songs = Data;
  }
  //create(createSongDto: CreateSongDto) {
  create(song: CreateSongDto): Song {
    this.songs.push(song);
    return song;
    //return 'This action adds a new song';
  }

  findAll() {
    return this.songs;
    //return `This action returns all songs`;
  }

  findOne(id: number) {
    return this.songs[id];
    //return `This action returns a #${id} song`;
  }

  /*update(id: number, updateSongDto: UpdateSongDto) {
    return `This action updates a #${id} song`;
  }

  remove(id: number) {
    return `This action removes a #${id} song`;
  }
  */
}
