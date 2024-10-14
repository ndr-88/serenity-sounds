import {
  Component,
  OnInit,
  QueryList,
  ViewChildren
} from '@angular/core';
import { SoundElementComponent } from '../components/sound-element/sound-element.component';

@Component({
  selector: 'app-sounds',
  templateUrl: './sounds.page.html',
  styleUrls: ['./sounds.page.scss'],
})
export class SoundsPage implements OnInit {
  @ViewChildren(SoundElementComponent)
  soundElements!: QueryList<SoundElementComponent>;
  data: { text: string; iconPath: string; soundPath: string }[] = [
    {
      text: 'fan',
      iconPath: 'assets/sound-icons/fan.png',
      soundPath: 'assets/sounds/ceiling-fan.mp3',
    },
    {
      text: 'engine',
      iconPath: 'assets/sound-icons/engine.png',
      soundPath: 'assets/sounds/car-engine-start-outside.mp3',
    },
    {
      text: 'car',
      iconPath: 'assets/sound-icons/car.png',
      soundPath: 'assets/sounds/car-sound-effect.mp3',
    },
    {
      text: 'fireplace',
      iconPath: 'assets/sound-icons/fireplace.png',
      soundPath: 'assets/sounds/fireplace.mp3',
    },
    {
      text: 'hair dryer',
      iconPath: 'assets/sound-icons/hair-dryer.png',
      soundPath: 'assets/sounds/hair-dryer.mp3',
    },
    {
      text: 'night',
      iconPath: 'assets/sound-icons/night.png',
      soundPath: 'assets/sounds/cicadas.mp3',
    },
    {
      text: 'rain',
      iconPath: 'assets/sound-icons/rain.png',
      soundPath: 'assets/sounds/rain.mp3',
    },
    {
      text: 'river',
      iconPath: 'assets/sound-icons/river.png',
      soundPath: 'assets/sounds/river.mp3',
    },
    {
      text: 'sea',
      iconPath: 'assets/sound-icons/sea.png',
      soundPath: 'assets/sounds/waves-white-noise.mp3',
    },
    {
      text: 'train',
      iconPath: 'assets/sound-icons/train.png',
      soundPath: 'assets/sounds/train.mp3',
    },
    {
      text: 'vacuum',
      iconPath: 'assets/sound-icons/vacuum.png',
      soundPath: 'assets/sounds/vacuum-cleaner.mp3',
    },
    {
      text: 'washing machine',
      iconPath: 'assets/sound-icons/washing-machine.png',
      soundPath: 'assets/sounds/washing-machine.mp3',
    },
  ];
  currentAudio: HTMLAudioElement | null = null;

  constructor() {}

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit() {}

  playElement(
    sound: { text: string; iconPath: string; soundPath: string },
    i: number
  ) {
    this.soundElements.forEach((element, index) => {
      if (index === i) {
        element.isActive = true;
      } else {
        element.isActive = false;
      }
    });
    // Se esiste già un audio in riproduzione, fermalo
    if (this.currentAudio) {
      this.currentAudio.pause(); // Ferma l'audio corrente
      this.currentAudio.currentTime = 0; // Riporta l'audio all'inizio
    }

    // Crea un nuovo oggetto Audio e impostalo sulla sorgente del suono selezionato
    this.currentAudio = new Audio(sound.soundPath);
    this.currentAudio.play(); // Avvia la riproduzione

    // Gestisci l'evento 'ended' per rimuovere il riferimento quando l'audio finisce
    this.currentAudio.addEventListener('ended', () => {
      this.currentAudio = null; // Resetta il riferimento quando l'audio finisce
    });
  }
}
