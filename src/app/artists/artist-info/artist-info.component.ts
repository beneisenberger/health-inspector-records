import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-artist-info",
  templateUrl: "./artist-info.component.html",
  styleUrls: ["./artist-info.component.scss"],
})
export class ArtistInfoComponent implements OnInit {
  artist = {
    name: null,
    image: null,
    description: null,
  };

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe((res) => {
      this.artist.name = res.id;
      this.setArtistInfo(this.artist);
    });
  }

  ngOnInit() {}

  setArtistInfo(artist: any) {
    switch (artist.name) {
      case "hussies":
        this.artist.name = "Hussies";
        this.artist.image = "../assets/hussies.jpg";
        this.artist.description =
          "Hussies have been playing with everyone in Omaha for the better part of 7 years. If you've toured through Omaha, chances are you've had a least one show where you've shared the bill. \n\n Originally conceived as a Hunches-meets-Pissed Jeans-esque noise punk group, Hussies recorded and released their first cassette titled 'Going' in 2014. \n\n Throughout the years, singer and songwriter Tom Bartolomei has morphed the sound around before ultimately settling on a songwriting-focused rock band. Still very riff and guitar-driven, the group's sound revolves mostly on execution of riff and phrase ideas, within a sort of 'wall of sound' context. This has led to the release of two more cassettes 'Nowhere' and 'Fast', both recorded at Omaha's ARC. \n\n When not on stage, you can probably find any of the Hussies having beers at Pageturners Lounge or playing pool at Brothers. Cheers.";
        break;
      case "screaming-plastic":
        this.artist.name = "Screaming Plastic";
        this.artist.image = "../assets/screamingplastic.jpg";
        this.artist.description =
          "Screaming Plastic focuses on creating soundscapes and hypnotic cycles of repetition, with the premise being no reheasals and all content being completely freely-improvised. \n\n While attenting the University of Nebraska together, all of Screaming Plastic's members at one time or another took place in the University's contemporary classical chamber music group Ensemble 768, playing pieces by Riley, Muhley, Cage et. al. \n\n After graduation, the collective booked a show to give improvising together a shot. Since then, it's been pretty much the same idea. Several of these improvisations have been recorded via cell phone to cassette tape, culminating in the group's two cassettes released on Health Inspector. \n\n In January 2019, Screaing Plastic released their debut record, which was recorded at Omaha's ARC and was supported by a New Music USA project grant.";
        break;
      case "ben-eisenberger":
        this.artist.name = "Ben Eisenberger";
        this.artist.image = "../assets/beneisenberger.jpg";
        this.artist.description =
          "Ben Eisenberger is Omaha's weirdo multi-genre, multi-instrumentalist. For this particular project and namesake, Ben writes acoustic folk songs in the vain of Nick Drake / Judee Sill / Joni Mitchell - a genre he, and I'm sure others, refer to as 'chamber folk'. \n\n In 2018, Ben quietly released his debut album 'Three Islands', a loss and Vietnamese(?)-inspired collection of songs written over the span of two trips overseas. A first run of tapes and CDs sold out to make this little-album-that-could a staple in decks from Omaha and throughout the Eastern US. Ben has been busy writing, arranging, and recording a follow-up, to be released sometime in later 2020 or early 2021. \n\n Ben holds a degree in classical guitar, but please don't write him off probably being too technical or complicated... trust me, he doesn't know how to play guitar.";
        break;
      case "tom-bartolomei":
        this.artist.name = "Tom Bartolomei";
        this.artist.image = "../assets/tombartolomei.jpg";
        this.artist.description =
          "Tom Bartolomei is a singer/songwriter, most notably the driving force behind Hussies, but also in his own right as a solo musician. \n\n His style of music could best be described as a sort of folk/country in the style of Towns Van Zandt, John Prine, etc. While originally conceived as a side project to Hussies, Bartolomei's solo music has taken the lead as a forcus for the young songwriter - and continues to be a vehicle for songs about love, loss, existential dread, and the usual songwriter fare.";
        break;
      case "fifi-nono":
        this.artist.name = "FiFi NoNo";
        this.artist.image = "../assets/fifinono.jpg";
        this.artist.description =
          "FiFi NoNo came to existance from the ashes of two projects - Mike Zimmerman's Flesh Eating Skin Disease and Blake Kostszewa's Shrinks. The resulting group kept the foundation of a hardcore punk group with heavy, angular riffs - while also mixing in elements of drone and avant-garde. \n\n The group's first tape entitled 'Songs for the Anxious' came out in 2017, followed by a self-titled follow-up, before the group called it quits in 2018.";
        break;
      case "apologies":
        this.artist.name = "apologies";
        this.artist.image = "../assets/apologies.jpg";
        this.artist.description =
          "apologies is the solo project of Blake Kostszewa (Shrinks/Fifi NoNo) - mixing in elements of goth, pop, and ambient electronic music.";
        break;
      case "bb-sledge":
        this.artist.name = "bb Sledge";
        this.artist.image = "../assets/bbsledge.png";
        this.artist.description =
          "bb Sledge is the side project of Andy Cubrich (Family Picnic/And How) - a psychedelic and heavily rhythmic pop project, often accompanied by Ryan Menchaca on drums during live performances.";
        break;
    }
  }
}
