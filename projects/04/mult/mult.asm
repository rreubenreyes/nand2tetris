// This file is part of www.nand2tetris.org
// and the book "The Elements of Computing Systems"
// by Nisan and Schocken, MIT Press.
// File name: projects/04/Mult.asm

// Multiplies R0 and R1 and stores the result in R2.
// (R0, R1, R2 refer to RAM[0], RAM[1], and RAM[2], respectively.)

// Put your code here.
  @R1
  D=M
  @n // store R1 here to be decremented
  M=D // n<-R1
  @R2
  M=0 // R2<-0
  (LOOP) // while n>0 
    @R0
    D=M // D<-R0
    @R2
    M=D+M // R2<-R0+R2
  @n
  M=M-1 // n<-n-1
  D=M // D<-n-1
  @LOOP
  D;JGT // if n > 0 goto LOOP


  
