import type { Schema, Struct } from '@strapi/strapi';

export interface ResumeBasicInfo extends Struct.ComponentSchema {
  collectionName: 'components_resume_basic_infos';
  info: {
    displayName: 'basicInfo';
    icon: 'file';
  };
  attributes: {};
}

export interface ResumeCertificates extends Struct.ComponentSchema {
  collectionName: 'components_resume_certificates';
  info: {
    displayName: 'certificates';
  };
  attributes: {
    certificatesType: Schema.Attribute.Enumeration<
      [
        'Beginner_\u521D\u7EA7',
        'Intermediate_\u4E2D\u7B49',
        'Advanced_\u719F\u7EC3',
        'Expert_\u4E13\u5BB6',
      ]
    >;
    date: Schema.Attribute.Date;
    description: Schema.Attribute.Blocks;
    issuer: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface ResumeEducation extends Struct.ComponentSchema {
  collectionName: 'components_resume_educations';
  info: {
    displayName: 'education';
    icon: 'file';
  };
  attributes: {};
}

export interface ResumeProjects extends Struct.ComponentSchema {
  collectionName: 'components_resume_projects';
  info: {
    displayName: 'projects';
    icon: 'file';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    endDate: Schema.Attribute.Date;
    name: Schema.Attribute.String;
    role: Schema.Attribute.String;
    startDate: Schema.Attribute.Date;
    techStack: Schema.Attribute.String;
  };
}

export interface ResumeSkills extends Struct.ComponentSchema {
  collectionName: 'components_resume_skills';
  info: {
    displayName: 'skills';
    icon: 'file';
  };
  attributes: {
    level: Schema.Attribute.Enumeration<
      [
        'Beginner_\u521D\u7EA7',
        'Intermediate_\u4E2D\u7B49',
        'Advanced_\u719F\u7EC3',
        'Expert_\u4E13\u5BB6',
      ]
    >;
    name: Schema.Attribute.String;
  };
}

export interface ResumeWorkExperience extends Struct.ComponentSchema {
  collectionName: 'components_resume_work_experiences';
  info: {
    displayName: 'workExperience';
    icon: 'file';
  };
  attributes: {};
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'resume.basic-info': ResumeBasicInfo;
      'resume.certificates': ResumeCertificates;
      'resume.education': ResumeEducation;
      'resume.projects': ResumeProjects;
      'resume.skills': ResumeSkills;
      'resume.work-experience': ResumeWorkExperience;
    }
  }
}
