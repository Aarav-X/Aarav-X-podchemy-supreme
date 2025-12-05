import { Hero } from "@/components/hero";
import { Newsletter } from "@/components/newsletter";
import {
  FeaturedEpisodesSection,
  RecentEpisodesSection,
  PopularEpisodesSection
} from "@/components/episodes-section";
import { featuredEpisodes, recentEpisodes, popularEpisodes } from "@/data/episodes";

/**
 * Home Page - The Threshold
 * 
 * This is the first breath. The moment a wanderer becomes a seeker.
 * Every element on this page serves a single purpose: to demonstrate
 * that what they seek has been found, and more awaits within.
 */

export default function Home() {
  return (
    <>
      {/* The Singularity - Hero */}
      <Hero />

      {/* Featured Episodes - The Curated Path */}
      <FeaturedEpisodesSection episodes={featuredEpisodes} />

      {/* Newsletter - The Weekly Elixir */}
      <Newsletter />

      {/* Recent Episodes - The Fresh Stream */}
      <RecentEpisodesSection episodes={recentEpisodes} />

      {/* Popular Episodes - The Wisdom of the Crowd */}
      <PopularEpisodesSection episodes={popularEpisodes} />
    </>
  );
}
