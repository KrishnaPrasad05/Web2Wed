import { Component } from '@angular/core';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent {
  feedback=[{
    name:'Ravi',
    star:3,
    message:'The profile builder guided me step by step, helping me express my true self. It felt natural and honest, and it led me to matches who actually shared my values and aligned with what I’m looking for.'
  },
  {
    name:'Kumari',
    star:3,
    message:'I loved how the builder captured every aspect of who I am—interests, lifestyle, and goals. The matches I received were thoughtful, relevant, and aligned with what I’m looking for.'
  },
  {
    name:'Sabari',
    star:4,
    message:'Unlike other platforms, this site’s profile builder dives deep. It asked meaningful questions, which made my profile stand out and attracted people who genuinely understood what I wanted in a partner.'
  },
  {
    name:'Ashok',
    star:3,
    message:'Creating my profile was smooth and surprisingly fun. The prompts helped me reflect on what truly matters. Because of this,aligned with what I’m looking for and I found someone who values the same things I do.'
  },
  {
    name:'Mohammad',
    star:4,
    message:'I was amazed by how accurate the matching was. The builder collected just the right details,and aligned with what I’m looking for and it honestly felt like the platform knew exactly who would be a good fit.'
  },
  {
    name:'Joseph',
    star:5,
    message:'The feature helped me present myself clearly and authentically. It wasn’t just about looks or basics—it was about personality, values, and compatibility.  That made all the difference for me.'
  },
  {
    name:'John',
    star:3,
    message:'Filling out the profile builder felt personal and thoughtful, not like a boring form. It asked the right questions,and aligned with what I’m looking for and the matches I received reflected the real me.'
  },
  {
    name:'Begum',
    star:4,
    message:' I appreciate how the builder focused on compatibility over surface-level details. It helped me connect with someone who truly understands me and wants the same future I envision.'
  },
  {
    name:'Dinesh',
    star:4,
    message:'From photos to preferences, the profile builder let me customize everything. It really brought out my personality, and I believe that’s why I found someone who matched perfectly.'
  },
  ]
  }
