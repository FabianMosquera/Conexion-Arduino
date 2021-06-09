int numero_botones = 5; 
int bts[5];
bool btgs[5];
String mensaje[] = {"Escenas","GrabEsc","Acciones","Personajes","GrabVoz"};

void setup() {
  Serial.begin(9600);
  for(int i=0; i<numero_botones; i++){
    bts[i] = i+2;
    }
  for( int i=0; i < numero_botones; i++){
    btgs[i] = false;
    }
  for(int i=0;i< numero_botones; i++){
    pinMode(bts[i],INPUT_PULLUP);
    }

}

void loop() {
  for(int i=0; i< numero_botones; i++){

    if(!btgs[i]){
      if(digitalRead(bts[i]) == LOW){
        //Serial.print("bt:" + String(i) + ":");
        //Serial.println(1);
        btgs[i] = true;
        }
      }
      else{
        if(digitalRead(bts[i]) == HIGH){

          //Serial.print("bt:" + String(i) + ":");
          Serial.println(mensaje[i]);
          //Serial.println(0);
          btgs[i] = false;
          }
        }
    }
    delay(15);

}
