#include <iostream>
using namespace std;

struct element{
    int data;
    element* next;
};
typedef struct element* List;

List first, last;

void khoiTao(List &first, List &last){
    first = last = NULL;
}

List taoPhanTu(int x){
    List p = new element();
    p->data = x;
    p->next = NULL;
    return p;
}

void themCuoi(List &first, List &last, List p){
    if(first==NULL){
        first = last = p;
    }
    else{
        last->next = p;
        last = p;
    }
}

void themCuoi(List &first, List &last, int x){
    List p = new element();
    p->data = x;
    p->next = NULL;
    if(first==NULL){
        first = last = p;
    }else{
        last->next = p;
        last = p;
    }

}

void themDau(List &first, List &last, List p){
    if(first==NULL){
        first = last = p;
    }
    else{
        p->next = first;
        first= p;
    }
}

void themDau(List &first, List &last, int x){
    List p = new element();
    p->data = x;
    p->next = NULL;
    if(first==NULL){
        first = last = p;
    }else{
        p->next = first;
        first = p;
    }

}

void inPhanTu(List first, List last){
    for(List p = first; p!=NULL;p=p->next){
        cout << p->data <<endl;
    }
}

void xoaDau(List &first, List &last){
    if(first == NULL) return;
    else{
        List p = first;
        first=first->next;
        delete(p);
        if(first==NULL) last=NULL;
    }
}

void xoaCuoi(List &first, List &last){
    if(first==NULL) return;
    if(first==last){
        List p = first;
        first = last = NULL;
        delete(p);
    }
    else{
        List p = first;
        while(p->next !=last){
            p=p->next;
        }
        last = p;
        p = p->next;
        last->next = NULL;
        delete(p);
    }
}

void sapXep(List first, List last){
    for(List p = first;p!=NULL;p=p->next){
        for(List q = p->next;q!=NULL;q=q->next){
            if(p->data>q->data){
                int tmp = p->data;
                p->data = q->data;
                q->data = tmp;
            }
        }
    }
}

int main(){
    khoiTao(first,last);
    List a = taoPhanTu(5);
    List b = taoPhanTu(7);
    themCuoi(first,last,a);
    themCuoi(first,last,b);
    themCuoi(first,last,23);
    themCuoi(first,last,9);
    List c = taoPhanTu(15);
    themDau(first,last,c);
    themDau(first,last,10);
    themDau(first,last,11);
    xoaDau(first,last);
    xoaCuoi(first,last);
    sapXep(first,last);
    inPhanTu(first,last);
}