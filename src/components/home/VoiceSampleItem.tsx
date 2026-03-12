'use client';

import RevealAnimation from '@/components/animation/RevealAnimation';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import Image from 'next/image';
import { memo, useEffect, useRef } from 'react';
import { VoiceSample } from './VoiceSamples';
import VoiceSampleSvg from './VoiceSampleSvg';

interface VoiceSampleItemProps {
  data: VoiceSample;
  index: number;
  isPlaying: boolean;
  onPlayPause: (index: number) => void;
}

const VoiceSampleItem = memo(({ data, index, isPlaying, onPlayPause }: VoiceSampleItemProps) => {
  const { imgLink, name, description, audioPath } = data;

  // Refs
  const itemRef = useRef<HTMLDivElement>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<HTMLDivElement>(null);

  // Initialize audio and setup event handlers
  useEffect(() => {
    const audio = new Audio(audioPath);
    audio.preload = 'metadata';
    audioRef.current = audio;

    const handleEnded = () => onPlayPause(index);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.pause();
      audio.removeEventListener('ended', handleEnded);
      audio.src = '';
      audioRef.current = null;
    };
  }, [audioPath, index, onPlayPause]);

  // Sync audio playback with isPlaying state
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) {
      return;
    }

    if (isPlaying) {
      audio.play().catch(() => onPlayPause(index));
    } else {
      audio.pause();
      audio.currentTime = 0;
    }
  }, [isPlaying, index, onPlayPause]);

  // Animation with GSAP
  useGSAP(() => {
    if (!contentRef.current || !svgRef.current) {
      return;
    }

    const duration = 0.5;
    const ease = 'power2.inOut';

    if (isPlaying) {
      gsap.to(contentRef.current, { y: -100, duration, ease });
      gsap.to(svgRef.current, { y: -36, duration, ease });
    } else {
      gsap.to(contentRef.current, { y: 0, duration, ease });
      gsap.to(svgRef.current, { y: 0, duration, ease });
    }
  }, [isPlaying]);

  const handleClick = () => {
    onPlayPause(index);
  };

  return (
    <RevealAnimation delay={0.1 + index * 0.1}>
      <div
        ref={itemRef}
        className={`group flex w-full max-w-104.25 items-center justify-between gap-x-3 rounded-full p-2 transition-colors duration-500 ease-in-out ${
          isPlaying
            ? 'bg-ordrat-red-main text-white'
            : 'bg-ordrat-red-light text-secondary'
        }`}
        aria-label={`Voice sample: ${name}`}>
        <div className="flex flex-auto items-center justify-start gap-x-3">
          <figure className="size-14 shrink-0 overflow-hidden rounded-full">
            <Image
              src={imgLink}
              alt={`Avatar for ${name} voice sample`}
              width={56}
              height={56}
              className="size-full object-cover"
              title={`${name} voice avatar`}
            />
          </figure>
          <div className="relative w-full max-w-64.25 overflow-hidden">
            <div ref={contentRef} className="voice-sample-item-content relative">
              <h3 className="text-tagline-1 font-normal">{name}</h3>
              <p className="text-tagline-3 font-normal">{description}</p>
            </div>
            {/* Voice visualization SVG */}
            <div
              ref={svgRef}
              className="absolute left-1/2 z-20 w-64.25 -translate-x-1/2 translate-y-0"
              aria-hidden="true">
              {isPlaying && <VoiceSampleSvg />}
            </div>
          </div>
        </div>
        <button
          onClick={handleClick}
          className="relative flex size-16 cursor-pointer items-center justify-center rounded-full bg-white p-4 transition-transform duration-300 ease-in-out group-hover:scale-107 focus:outline-none"
          aria-label={isPlaying ? `Pause voice sample for ${name}` : `Play voice sample for ${name}`}
          aria-pressed={isPlaying}>
          <span className="sr-only">{isPlaying ? `Pause ${name}` : `Play ${name}`}</span>
        </button>
      </div>
    </RevealAnimation>
  );
});

VoiceSampleItem.displayName = 'VoiceSampleItem';

export default VoiceSampleItem;
