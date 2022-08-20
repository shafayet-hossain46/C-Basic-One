#include <stdio.h>
int main (){
  printf("Enter The Radius : ");
    double radius;
    scanf("%lf", &radius);

    const double PI = 3.1416;
    double perimeter = 2*PI*radius;
    printf("Perimeter = %lf\n", perimeter);

    double area = 2*radius*radius;
    printf("Area = %lf\n", area);
    return 0;
}