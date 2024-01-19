import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import Collection from "@/components/shared/Collection";
import { getAllEvents } from "@/lib/actions/event.actions";
import Search from "@/components/shared/Search";
import { SearchParamProps } from "@/types";
import CategoryFilter from "@/components/shared/CategoryFilter";

export default async function Home({ searchParams }: SearchParamProps) {
  const page = Number(searchParams?.page) || 1;
  const searchText = (searchParams?.query as string) || "";
  const category = (searchParams?.category as string) || "";

  const events = await getAllEvents({
    query: searchText,
    category,
    page,
    limit: 6,
  });

  // console.log(events);
  return (
    <>
      <section className="bg-primary-50 bg-dotted-pattern bg-contain py-5 md:py-10">
        <div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:xl:gap-2">
          <div className="flex flex-col justify-center gap-8">
            <h1 className="h1-bold">
              Host ,Connect, Celebrate: Your events, Our Platform
            </h1>
            <p className="p-regular-20 md:p-regular-24">
              Book and Learn from 3186+ events and 100+ speakers in world class
              venues with our global community
            </p>
            <Button size="lg" asChild className=" button w-full sm:w-fit">
              <Link href="#events">Explore Now</Link>
            </Button>
          </div>

          <Image
            src="/assets/images/hero.png"
            alt="hero"
            width={1000}
            height={1000}
            className="max-h-[70vh] object-contain object-center 2xl:max-h-[50vh]"
          />
        </div>
      </section>

      <section
        className="wrapper my-8 flex flex-col gap-8 md:gap-12"
        id="events"
      >
        <h2 className="h2-bold">
          Trusted by <br /> Thousands of events
        </h2>
        <div className="flex w-full flex-col gap-5 md:flex-row">
          <Search />
          <CategoryFilter />
        </div>

        <Collection
          data={events?.data}
          emptyTitle="No events found"
          emptyStateSubtext="Come back later for more events"
          collectionType="All_Events"
          limit={6}
          page={page}
          totalPages={events?.totalPages}
        />
      </section>
    </>
  );
}
