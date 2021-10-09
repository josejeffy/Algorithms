#include <stdio.h>

#define N 100

main(){
    int mask[N+1],i,j;
    for (i = 0; i < N+1; i++)
        mask[i] = 1;
    for (i = 2; i < N+1; i++){
        if (mask[i]!=0){
            j = 2;
            while(j*i<N+1){
                mask[j*i] = 0;
                j++;
            }
        }
    }
    for (int i = 2; i < N+1; i++)
        if(mask[i]==1) printf("%3d",i);
}