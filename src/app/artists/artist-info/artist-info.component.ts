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
          "Hussies have been playing with everyone in Omaha for the better part of 7 years. If you've toured through Omaha, chances are you've had a least one show where you've shared the bill. \n\n Originally conceived as a Hunches-meets-Pissed Jeans-esque noise punk group, Hussies recorded and released their first cassette titled 'Going' in 2014. \n\n Throughout the years, singer and songwriter Tom Bartolomei has morphed the sound throughout the years before ultimately settling on a songwriting-focused rock band. Still very riff and guitar-driven, the group's sound revolves mostly on execution of riff and phrase ideas, within a sort of 'wall of sound' context. This has led to the release of two more cassettes 'Nowhere' and 'Fast', both recorded at Omaha's ARC. \n\n When not on stage, you can probably find any of the Hussies having beers at Pageturners Lounge or playing pool at Brothers. Cheers.";
        break;
      case "screaming-plastic":
        this.artist.name = "Screaming Plastic";
        this.artist.image = "../assets/screamingplastic.jpg";
        this.artist.description =
          "Screaming Plastic focuses on creating soundscapes and hypnotic cycles of repetition, with the premise being no reheasal and completely freely-improvised. \n\n While attenting the University of Nebraska together, all of Screaming Plastic's members at one time or another took place in the University's contemporary classical chamber music group Ensemble 768. \n\n After graduation, the collective booked a show to give improvising together a shot. Since then, it's been pretty much the same idea. Several of these improvisations have been recorded via cell phone to cassette tape, culminating in the group's two cassettes released on Health Inspector. \n\n In January 2019, Screaing Plastic released their debut record, which was recorded at Omaha's ARC and was supported by a New Music USA project grant.";
        break;
      case "ben-eisenberger":
        this.artist.name = "Ben Eisenberger";
        this.artist.image = "../assets/beneisenberger.jpg";
        this.artist.description =
          "Ben Eisenberger is Omaha's weirdo multi-genre multi-instrumentalist. For this particular project and namesake, Ben writes acoustic folk songs in the vain of Nick Drake / Judee Sill / Joni Mitchell - a genre he refers to as 'chamber folk'. \n\n In 2018, Ben quietly released his debut album 'Three Islands', a loss and Vietnam-inspired collection of songs written over the span of two trips overseas. A first run of tapes and CDs sold out to make this little-album-that-could a staple in decks from Omaha and throughout the Eastern US. Ben has been quietly writing, arranging, and recording a follow-up, to be released sometime in later 2020 or early 2021. ";
        break;
      case "tom-bartolomei":
        this.artist.name = "Tom Bartolomei";
        this.artist.image = "../assets/tombartolomei.jpg";
        this.artist.description =
          "Tom Bartolomei is a singer/songwriter, most notably the driving force behind Hussies, but also in his own right as a solo musician.";
        break;
      case "fifi-nono":
        this.artist.name = "FiFi NoNo";
        this.artist.image = "../assets/fifinono.jpg";
        this.artist.description =
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Urna duis convallis convallis tellus id interdum velit laoreet. Sed elementum tempus egestas sed. Suscipit adipiscing bibendum est ultricies integer quis auctor elit. Volutpat ac tincidunt vitae semper quis lectus nulla. Sit amet massa vitae tortor condimentum lacinia quis. Bibendum enim facilisis gravida neque convallis. Id venenatis a condimentum vitae sapien pellentesque. In arcu cursus euismod quis. Cras fermentum odio eu feugiat. \n\n Ultricies lacus sed turpis tincidunt. Sapien et ligula ullamcorper malesuada proin libero nunc consequat. Egestas sed sed risus pretium. Vitae congue eu consequat ac felis donec. \n\n Sagittis eu volutpat odio facilisis mauris sit amet massa. Ultrices neque ornare aenean euismod. Arcu odio ut sem nulla pharetra. Rutrum tellus pellentesque eu tincidunt tortor aliquam nulla. Ornare suspendisse sed nisi lacus sed viverra tellus.";
        break;
      case "apologies":
        this.artist.name = "apologies";
        this.artist.image = "../assets/apologies.jpg";
        this.artist.description =
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Urna duis convallis convallis tellus id interdum velit laoreet. Sed elementum tempus egestas sed. Suscipit adipiscing bibendum est ultricies integer quis auctor elit. Volutpat ac tincidunt vitae semper quis lectus nulla. Sit amet massa vitae tortor condimentum lacinia quis. \n\n Bibendum enim facilisis gravida neque convallis. Id venenatis a condimentum vitae sapien pellentesque. In arcu cursus euismod quis. Cras fermentum odio eu feugiat. Ultricies lacus sed turpis tincidunt. Sapien et ligula ullamcorper malesuada proin libero nunc consequat. \n\n Egestas sed sed risus pretium. Vitae congue eu consequat ac felis donec. Sagittis eu volutpat odio facilisis mauris sit amet massa. Ultrices neque ornare aenean euismod. \n\n Arcu odio ut sem nulla pharetra. Rutrum tellus pellentesque eu tincidunt tortor aliquam nulla. Ornare suspendisse sed nisi lacus sed viverra tellus.";
        break;
      case "bb-sledge":
        this.artist.name = "bb Sledge";
        this.artist.image = "../assets/bbsledge.png";
        this.artist.description =
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Urna duis convallis convallis tellus id interdum velit laoreet. \n\n Sed elementum tempus egestas sed. Suscipit adipiscing bibendum est ultricies integer quis auctor elit. Volutpat ac tincidunt vitae semper quis lectus nulla. Sit amet massa vitae tortor condimentum lacinia quis. Bibendum enim facilisis gravida neque convallis. \n\n Id venenatis a condimentum vitae sapien pellentesque. In arcu cursus euismod quis. Cras fermentum odio eu feugiat. Ultricies lacus sed turpis tincidunt. Sapien et ligula ullamcorper malesuada proin libero nunc consequat. Egestas sed sed risus pretium. Vitae congue eu consequat ac felis donec. Sagittis eu volutpat odio facilisis mauris sit amet massa. Ultrices neque ornare aenean euismod. Arcu odio ut sem nulla pharetra. \n\n Rutrum tellus pellentesque eu tincidunt tortor aliquam nulla. Ornare suspendisse sed nisi lacus sed viverra tellus.";
        break;
    }
  }
}
