#include <stdio.h>
#include <stdlib.h>

#include "space_age.h"

typedef struct
{
    const char *name;
    float orbital_period;
} PlanetInfo;

// Define planet information in an array of structures
const PlanetInfo planet_data[] = {{"MERCURY", 0.2408467}, {"VENUS", 0.61519726}, {"EARTH", 1.0}, {"MARS", 1.8808158}, {"JUPITER", 11.862615}, {"SATURN", 29.447498}, {"URANUS", 84.016846}, {"NEPTUNE", 164.79132}};

float age(planet_t planet, int64_t seconds)
{
    if (planet >= MERCURY && planet <= NEPTUNE)
    {
        // seconds in one year on earth
        int64_t earth_seconds = 31557600;
        // Calculate age on the specified planet
        float age = (float)seconds / (planet_data[planet].orbital_period * earth_seconds);
        char formattedAge[20];
        sprintf(formattedAge, "%.2f", age);
        return atof(formattedAge);
    }
    else
    {
        return -1.0; // Invalid planet
    }
}

int main()
{
    planet_t planet = EARTH;
    int64_t seconds = 1000000000;
    float trueAge = age(planet, seconds);

    if (trueAge >= 0.0)
    {
        printf("Age on %s is %.2f Earth-years\n", planet_data[planet].name, trueAge);
    }
    else
    {
        printf("Invalid planet selected.\n");
    }

    return 0;
}