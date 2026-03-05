import Image from 'next/image';
import { data } from '@/lib/data';
import { Mail, Phone, Download } from 'lucide-react';
import { Button } from './ui/button';
import placeholderImages from '@/lib/placeholder-images.json';

const profilePic = placeholderImages.placeholderImages.find(p => p.id === 'profile-picture');

export function Hero() {
  const resumeUrl = data.resumeUrl;
  return (
    <div className="row align-items-center flex-column-reverse flex-md-row text-center text-md-start g-5 py-4">
      <div className="col-md-7">
        <h1 className="display-4 fw-bold tracking-tighter font-headline mb-3">
          {data.name}
        </h1>
        <p className="h4 text-primary fw-medium mb-4">{data.title}</p>
        <div className="d-flex flex-wrap justify-content-center justify-content-md-start mb-4 gap-3 text-muted">
          <div className="d-flex align-items-center gap-2">
            <Mail className="h-5 w-5" />
            <a href={`mailto:${data.email}`} className="text-decoration-none text-reset hover-primary">{data.email}</a>
          </div>
          <div className="d-flex align-items-center gap-2">
            <Phone className="h-5 w-5" />
            <a href={`tel:${data.mobile}`} className="text-decoration-none text-reset hover-primary">{data.mobile}</a>
          </div>
          {data.location && (
            <div className="d-flex align-items-center gap-2">
              <span className="text-muted">Location:</span>
              <span>{data.location}</span>
            </div>
          )}
        </div>
        <p className="lead text-muted mb-4 opacity-75">
          {data.summary}
        </p>
        <div className="d-flex gap-3 justify-content-center justify-content-md-start">
          <Button asChild className="btn btn-primary px-4 py-2">
            <a href={resumeUrl} download="Dhanush_Kumar_T.docx" target="_blank" rel="noopener noreferrer">
              <Download className="mr-2 h-4 w-4" />
              Download CV
            </a>
          </Button>
        </div>
      </div>
      <div className="col-md-5 d-flex justify-content-center">
        <div className="position-relative">
          {profilePic && (
            <div className="position-relative overflow-hidden rounded-circle border border-4 border-primary border-opacity-25 shadow-lg" style={{ width: '250px', height: '250px' }}>
              <Image
                src={profilePic.imageUrl}
                alt={data.name}
                fill
                priority
                quality={100}
                data-ai-hint={profilePic.imageHint}
                className="object-fit-cover"
                sizes="(max-width: 640px) 384px, 512px"
              />
            </div>
          )}
          <div className="position-absolute bottom-0 end-0 bg-accent rounded-circle z-n1 pulse-animation" style={{ width: '80px', height: '80px', transform: 'translate(20%, 20%)' }}></div>
          <div className="position-absolute top-0 start-0 bg-primary rounded-3 z-n1 pulse-animation" style={{ width: '60px', height: '60px', transform: 'translate(-20%, -20%)' }}></div>
        </div>
      </div>
    </div>
  );
}
